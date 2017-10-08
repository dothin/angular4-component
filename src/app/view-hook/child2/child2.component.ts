import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  public time: string = new Date().toLocaleString();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('2号子组件的ngAfterViewInit...');
  }

  ngAfterViewChecked() {
    console.log('2号子组件的ngAfterViewChecked...');
  }

  public setTime(time: string): void {
    this.time = time;
  }

}
