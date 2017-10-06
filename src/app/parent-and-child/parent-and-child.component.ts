import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent-and-child',
  templateUrl: './parent-and-child.component.html',
  styleUrls: ['./parent-and-child.component.scss']
})
export class ParentAndChildComponent implements OnInit {
  @ViewChild(ChildComponent)
  private childComponent: ChildComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.childComponent.childFn();
  }

  public doSomething(data: string): void {
    console.log(data);
    console.log('收到了子组件的自定义事件！');
  }

}
