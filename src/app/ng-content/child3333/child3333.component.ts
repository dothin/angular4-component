import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child3333',
  templateUrl: './child3333.component.html',
  styleUrls: ['./child3333.component.scss']
})
export class Child3333Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('子组件ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('子组件ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('子组件ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('子组件ngAfterViewChecked');
  }

}
