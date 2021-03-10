import { Route } from '@angular/router';
import { ModuleComponent } from './modules/module/components/module/module.component';

export const appRoutes: Route[] = [
  {
    path: 'module',
    component: ModuleComponent,
  },
  {
    path: 'lazy',
    loadChildren: () =>
      import('./modules/lazy/lazy.module').then((m) => m.LazyModule),
  },
];
