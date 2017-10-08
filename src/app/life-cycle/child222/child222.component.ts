import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child222',
  templateUrl: './child222.component.html',
  styleUrls: ['./child222.component.scss']
})
export class Child222Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log('child222 ngDoCheck');
  }

}
