import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  combineLatest,
  fromEvent,
  interval,
  Observable,
  Observer,
  Subject,
  Subscriber,
  Subscription,
  zip,
} from 'rxjs';
import {
  count,
  debounceTime,
  last,
  map,
  mergeMap,
  takeLast,
  takeWhile,
  tap,
} from 'rxjs/operators';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription[] = [];
  public progressBar1: number = 0;
  public progressBar2: number = 0;
  public imgSrc: string = '';
  public showTypingPanel: boolean = true;

  private isTyping = new Subject<boolean>();
  public isTyping$ = this.isTyping.asObservable();

  constructor(private mainService: MainService) {}

  ngOnInit() {
    const source = fromEvent(document, 'input')
      .pipe(debounceTime(2000))
      .subscribe(() => console.log('click'));
  }

  ngOnDestroy() {
    this.subscription.forEach((elem: any) => elem.unsubscribe());
  }

  private drawImg() {
    this.subscription.push(
      this.mainService.getImg().subscribe((src: string) => (this.imgSrc = src))
    );
  }

  public startLoading() {
    const progressBar1$ = interval(100).pipe(
      takeWhile((count: number) => count <= 100),
      map((count: number) => count * 5),
      map((count: number) => {
        this.progressBar1 = count;
      })
    );
    const progressBar2$ = interval(50).pipe(
      takeWhile((count: number) => count <= 100),
      map((count: number) => {
        this.progressBar2 = count;
      })
    );

    this.subscription.push(
      zip(progressBar1$, progressBar2$)
        .pipe(last())
        .subscribe(() => {
          this.drawImg();
        })
    );
  }
}
