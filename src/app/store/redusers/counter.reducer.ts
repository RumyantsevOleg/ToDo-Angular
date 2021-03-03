import { createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  updateOn,
} from '../actions/counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0),
  on(updateOn, (state) => state + 5)
);

export function counterReducer(state: any, action: any): any {
  return _counterReducer(state, action);
}
