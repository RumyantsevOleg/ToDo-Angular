import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TodoCreateAction } from '../../store/todo.actions';
import { TodoState } from '../../store/todo.reducer';
import { todoListSelector } from '../../store/todo.selectors';
import { Observable, Subscription } from 'rxjs';
import { TodoModel } from '../../model/todo.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss'],
})
export class TodoWidgetComponent implements OnInit, OnDestroy {
  public todoList: TodoModel[] = [];
  private subscriptions: Subscription[] = [];

  constructor(private store$: Store<TodoState>) {}

  public ngOnInit(): void {
    this.subscriptions.push(
      this.store$
        .pipe(select(todoListSelector))
        .subscribe((todoList) => (this.todoList = todoList))
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  public onCreate(name: string): void {
    this.store$.dispatch(new TodoCreateAction({ name }));
  }
}
