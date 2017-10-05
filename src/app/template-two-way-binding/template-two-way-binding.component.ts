import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-two-way-binding',
  templateUrl: './template-two-way-binding.component.html',
  styleUrls: ['./template-two-way-binding.component.scss']
})
export class TemplateTwoWayBindingComponent implements OnInit {
  public fontSizePx: number = 14;

  constructor() { }

  ngOnInit() {
  }

}
