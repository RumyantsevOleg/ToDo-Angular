import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {UpdateOn} from "./store/actions/counter.actions";
import {Store} from "@ngrx/store";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public count$: Observable<number>;
  private inpValue: number = 0;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = this.store.select('count');
  }

  increase() {
    // this.store.dispatch();
  }

  decrease() {
    // this.store.dispatch(decrement());
  }

  clear() {
    // this.store.dispatch(reset());
  }

  updateOn() {
    this.store.dispatch(new UpdateOn(this.inpValue));
  }

  onInpBlur(event: any) {
    this.inpValue = Number(event.target.value);
  }
}
