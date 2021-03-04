import { createAction } from '@ngrx/store';
import {Action} from '@ngrx/store';


// export const increment = createAction('[Counter Component] Increment');
// export const decrement = createAction('[Counter Component] Decrement');
// export const reset = createAction('[Counter Component] Reset');
// export const updateOn = createAction('[Counter Component] updateOn');

export enum CounterTypes {
  increment = '[Counter Component] increment',
  UpdateOn = '[Counter Component] updateOn',
}

export class increment implements Action {
  readonly type: string = CounterTypes.increment

  constructor(public payload: any) {
  }
}

export class UpdateOn implements Action {
  readonly  type: string = CounterTypes.UpdateOn
  public payload: number
  constructor(payload: number) {
    this.payload = payload * 2

  }
}

export type CounterActionUnion = UpdateOn | increment;

