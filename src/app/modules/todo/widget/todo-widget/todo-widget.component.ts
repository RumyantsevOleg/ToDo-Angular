import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TodoCreateAction } from '../../store/todo.actions';
import { TodoState } from '../../store/todo.reducer';
import { todoListSelector } from '../../store/todo.selectors';
import { Observable, Subscription } from 'rxjs';
import { TodoModel } from '../../model/todo.model';
import { tap } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss'],
})
export class TodoWidgetComponent implements OnInit, OnDestroy {
  public todoList: TodoModel[] = [];
  private subscriptions: Subscription[] = [];
  public urlNum: string = '1';
  public planList: Array<any> = [];

  constructor(
    private store$: Store<TodoState>,
    private apiService: ApiService
  ) {}

  public ngOnInit(): void {
    this.subscriptions.push(
      this.store$
        .pipe(select(todoListSelector))
        .subscribe((todoList) => (this.todoList = todoList))
    );

    this.apiService
      .getAllPlan()
      .pipe()
      .subscribe((list) => {
        this.planList = list;
      });
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  public onCreate(name: string): void {
    this.store$.dispatch(new TodoCreateAction({ name }));
  }

  handleInput(event: any) {
    this.urlNum = event.target.value;
    console.log(this.urlNum);
  }
}
