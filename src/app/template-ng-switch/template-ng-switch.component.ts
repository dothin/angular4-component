import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ng-switch',
  templateUrl: './template-ng-switch.component.html',
  styleUrls: ['./template-ng-switch.component.scss']
})
export class TemplateNgSwitchComponent implements OnInit {
  public mapStatus: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
