import { TodoPageComponent } from './page/todo-page/todo-page.component';
import { Route } from '@angular/router';
import {SomePageComponent} from "./page/some-page/some-page.component";

export const todoRoutes: Route[] = [
  {
    path: '',
    component: TodoPageComponent,
  },
  {
    path: 'some/:id',
    component: SomePageComponent,
  },
];
