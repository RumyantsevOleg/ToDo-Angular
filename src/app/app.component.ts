import { Component, Inject, OnInit } from '@angular/core';
import { ModuleService } from './modules/module/services/module.service';
import { MainService } from './services/main.service';
import { LazyService } from './modules/lazy/lazy.service';
import {config, of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private mainService: MainService,
    // private mainService: MainService,
    // private lazyService: LazyService,
  ) {
    mainService.test();
    // console.log('USER_CONFIG', config)
    // mainService.test()
  }

  ngOnInit() {
    // get id (plan-id-1 / plan-id-2)
    // send get http://localhost:8081/api/plans/{planID}
    // check editDate from today
  }
}
