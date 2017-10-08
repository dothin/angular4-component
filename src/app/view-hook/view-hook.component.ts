import { Component, OnInit, ViewChild } from '@angular/core';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-view-hook',
  templateUrl: './view-hook.component.html',
  styleUrls: ['./view-hook.component.scss']
})
export class ViewHookComponent implements OnInit {
  @ViewChild('child1')
  child1: Child1Component

  @ViewChild('child2')
  child2: Child2Component

  constructor() { }

  ngOnInit() {
    setInterval(
      () => {
        this.child1.setTime(new Date().toLocaleString());
      }
      , 1000);
  }

  ngAfterViewInit() {
    console.log('父组件的ngAfterViewInit...');
  }

  ngAfterViewChecked() {
    console.log('父组件的ngAfterViewChecked...');
  }

}
