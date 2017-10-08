import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.scss']
})
export class NgContentComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('父组件ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('父组件ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('父组件ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('父组件ngAfterViewChecked');
  }

}
