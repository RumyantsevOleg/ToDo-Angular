import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { TODO_REDUCER_NODE, todoReducer } from './store/todo.reducer';
import { TodoPageComponent } from './page/todo-page/todo-page.component';
import { RouterModule } from '@angular/router';
import { todoRoutes } from './todo.routes';
import { TodoWidgetComponent } from './widget/todo-widget/todo-widget.component';
import { TodoCreateFormUiComponent } from './UI/todo-create-form-ui/todo-create-form-ui.component';
import { FormsModule } from '@angular/forms';
import { TodoListUiComponent } from './UI/todo-list-ui/todo-list-ui.component';
import {EffectsModule} from "@ngrx/effects";
import {TodoEffects} from "./store/todo.effect";
import { SomePageComponent } from './page/some-page/some-page.component';



@NgModule({
  declarations: [
    TodoPageComponent,
    TodoWidgetComponent,
    TodoCreateFormUiComponent,
    TodoListUiComponent,
    SomePageComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    RouterModule.forChild(todoRoutes),
    EffectsModule.forFeature([TodoEffects]),
    FormsModule,
  ],
})
export class TodoModule {}
