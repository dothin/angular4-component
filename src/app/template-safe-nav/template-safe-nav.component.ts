import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-safe-nav',
  templateUrl: './template-safe-nav.component.html',
  styleUrls: ['./template-safe-nav.component.scss']
})
export class TemplateSafeNavComponent implements OnInit {
  public currentRace: any = null;

  constructor() { }

  ngOnInit() {
  }

}
