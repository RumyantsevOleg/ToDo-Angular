import {InjectionToken, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './app-routing.module';
import { MainComponent } from './components/main/main.component';
import {ModuleModule} from "./modules/module/module.module";
import {MainService} from "./services/main.service";
import {LazyModule} from "./modules/lazy/lazy.module";
import {USER_CONFIG} from "./classes";



@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    MainService,
    { provide: USER_CONFIG, useValue: ['AppModule' ], multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

}
