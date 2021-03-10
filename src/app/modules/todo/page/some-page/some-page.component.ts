import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-some-page',
  templateUrl: './some-page.component.html',
  styleUrls: ['./some-page.component.scss'],
})
export class SomePageComponent implements OnInit {
  public id: string = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(map((params) => params.getAll('id')))
      .subscribe((data) => (this.id = data[0]));
  }
}
