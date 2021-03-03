import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  updateOn,
} from './store/actions/counter.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = this.store.select('count');
  }

  increase() {
    this.store.dispatch(increment());
  }

  decrease() {
    this.store.dispatch(decrement());
  }

  clear() {
    this.store.dispatch(reset());
  }

  updateOn() {
    this.store.dispatch(updateOn());
  }
}
