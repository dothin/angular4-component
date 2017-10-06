import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-child1',
  templateUrl: './local-child1.component.html',
  styleUrls: ['./local-child1.component.scss']
})
export class LocalChild1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public writeData(): void {
    window.localStorage.setItem('json', JSON.stringify({ name: 'dothin', age: 24 }));

  }

}
