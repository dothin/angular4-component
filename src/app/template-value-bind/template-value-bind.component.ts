import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-value-bind',
  templateUrl: './template-value-bind.component.html',
  styleUrls: ['./template-value-bind.component.scss']
})
export class TemplateValueBindComponent implements OnInit {
  public imgSrc: string = './assets/imgs/1.jpg';

  constructor() { }

  ngOnInit() {
  }

  public changeSrc(): void {
    if (Math.ceil(Math.random() * 1000000000) % 2) {
      this.imgSrc = './assets/imgs/2.jpg';
    } else {
      this.imgSrc = './assets/imgs/1.jpg';
    }
  }
}
