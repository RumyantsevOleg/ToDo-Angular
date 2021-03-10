import { Component, Input, OnInit } from '@angular/core';
import { TodoModel } from '../../model/todo.model';

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: ['./todo-list-ui.component.scss'],
})
export class TodoListUiComponent implements OnInit {
  @Input()
  todoList: TodoModel[] = [];

  constructor() {}

  ngOnInit(): void {}
}
