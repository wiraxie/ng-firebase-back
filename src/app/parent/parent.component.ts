import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
