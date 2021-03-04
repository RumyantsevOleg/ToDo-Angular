import {getReducer} from './counter.reducer';
import {ActionReducerMap} from "@ngrx/store";

// export const reducers = {
//   count: counterReducer,
// };

export const getReducers = (): ActionReducerMap<any> => ({
  count: getReducer(),
})

export const reducers: ActionReducerMap<any> = {
  count: getReducer(),
};
