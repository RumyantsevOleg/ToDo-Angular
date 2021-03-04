import {
  ActionReducer,
  combineReducers,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { CounterActionUnion, CounterTypes } from '../actions/counter.actions';

export const initialState = 0;



const counterReducer = (
  state: number = 0,
  action: CounterActionUnion
): number => {
  switch (action.type) {
    case CounterTypes.increment: {
      return 1;
    }
    case CounterTypes.UpdateOn:
      const num = action.payload;
      return state + num;
    default: {
      return state;
    }
  }
};

export interface State {
  counterReducer: number;
}

export const getReducer = (): ActionReducer<State> =>
  combineReducers({
    // @ts-ignore
    counterReducer,
  });
