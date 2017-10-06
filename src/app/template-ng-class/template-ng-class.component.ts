import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ng-class',
  templateUrl: './template-ng-class.component.html',
  styleUrls: ['./template-ng-class.component.scss']
})
export class TemplateNgClassComponent implements OnInit {
  public currentClasses: {};

  public canSave: boolean = false;
  public isUnchanged: boolean = false;
  public isSpecial: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  setCurrentClasses() {
    this.canSave = true;
    this.isUnchanged = true;
    this.isSpecial = true;

    this.currentClasses = {
      saveable: this.canSave,
      modified: this.isUnchanged,
      special: this.isSpecial
    };
  }

}
