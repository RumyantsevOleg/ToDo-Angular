import { Action } from '@ngrx/store';

export enum todoActionsType {
  create = '[TODO] create todo item',
  update = '[TODO] update todo item',
}

export class TodoCreateAction implements Action {
  readonly type = todoActionsType.create;
  constructor(public payload: { name: string }) {}
}

export class TodoUpdateAction implements Action {
  readonly type = todoActionsType.update;
  constructor(public payload: string) {}
}



export type TodoActions = TodoCreateAction | TodoUpdateAction;
