import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  catchError,
  concatAll,
  concatMap, distinct, filter, first, last,
  map,
  mergeMap, skip,
  switchMap, take,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import {
  BehaviorSubject, combineLatest,
  forkJoin, from, interval,
  Observable,
  of,
  pipe,
  Subject,
  Subscription, zip,
} from 'rxjs';

@Component({
  selector: 'app-some-page',
  templateUrl: './some-page.component.html',
  styleUrls: ['./some-page.component.scss'],
})
export class SomePageComponent implements OnInit, OnDestroy {
  private requestRoutes = [
    'http://localhost:8081/api/plans/plan-id-1',
    'http://localhost:8081/api/plans/plan-id-2',
    'http://localhost:8081/api/plans/plan-id-3',
  ];
  public id: string = '';
  public time: Date = new Date();
  private subscriptions: Subscription[] = [];

  private value: BehaviorSubject<string> = new BehaviorSubject('first-value');
  private value$: Observable<string> = this.value.asObservable();

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.subscriptions?.push(
      this.value$.subscribe((value) => {
        console.log('value$', value);
      })
    );

    setTimeout(() => {
      this.value.next('second-value');
    }, 5000);

    setTimeout(() => {
      this.value.next('third-value');
    }, 10000);

    // const interval1$ = of(1, 2, 3, 4, 5)
    //   .pipe(distinct())
    //   // OUTPUT: 1,2,3,4,5
    //   .subscribe(console.log);
    // const interval2$ = interval(5000)

    // zip(interval1$, interval2$)
    //   .subscribe((data) => console.log('combineLatest', data))

  }

  public onParallelRequest() {
    this.subscriptions?.push(
      of(null)
        .pipe(
          withLatestFrom(this.value$),
          mergeMap(([_, value]) =>
            forkJoin(
              this.apiService.getPlansFromArray(this.requestRoutes, value)
            )
          ),
          catchError((err) => {
            return of(null);
          })
        )
        .subscribe((result) => {
          console.log(result);
        })
    );
  }

  public onChainRequest() {
    // this.subscriptions?.push(
    //   from(this.requestRoutes)
    //     .pipe(
    //       // concatAll(),
    //       withLatestFrom(this.value$),
    //       concatMap(([url, value]) => {
    //         return this.apiService.getOnePlan(url, value)
    //           .pipe(
    //             catchError((err: any) => {
    //               console.log('err: ', err);
    //               return of(null);
    //             })
    //           );
    //       }),
    //
    //     )
    //     .subscribe(
    //       (plan) => {
    //         console.log('subscribe', plan);
    //       }
    //       /*(error) => {
    //         console.log('error', error);
    //       },
    //       () => {
    //         console.log('complete');
    //       }*/
    //     )
    // );
  }

  ngOnDestroy() {
    this.subscriptions?.forEach((sub) => sub.unsubscribe());
  }
}
