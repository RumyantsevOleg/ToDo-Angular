import { ApiService } from '../services/api.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { todoActionsType, TodoUpdateAction } from './todo.actions';
import { map, mergeMap, tap } from 'rxjs/operators';

@Injectable()
export class TodoEffects {
  public infoAPI$ = createEffect(() =>

    this.actions$.pipe(
      ofType(todoActionsType.create),
      tap(() => console.log('effect working')),
      mergeMap(() =>
        this.todoService.getPlan().pipe(
          map((answerAPI) => {
            return new TodoUpdateAction(answerAPI.title);
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private todoService: ApiService) {}
}
