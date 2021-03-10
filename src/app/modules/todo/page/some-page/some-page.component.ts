import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-some-page',
  templateUrl: './some-page.component.html',
  styleUrls: ['./some-page.component.scss'],
})
export class SomePageComponent implements OnInit, OnDestroy {
  public id: string = '';
  public time: Date = new Date();
  private subscription: Subscription | undefined;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.subscription = this.route.paramMap
      .pipe(
        map((params) => params.getAll('id')),
        map((data) => data[0]),
        map((id: string) => {
          return this.apiService
            .getPlan(id)
            .pipe(
              map((obj) => obj.editDate),
              map((editDate) => new Date() - new Date(editDate)) // Фикс
            )
            .subscribe((date) => (this.time = date));
        })
      )
      .subscribe(() => {
        // this.id = data[0];
        // this.timeDiff(Number(this.id));
      });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
