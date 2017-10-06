import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ng-style',
  templateUrl: './template-ng-style.component.html',
  styleUrls: ['./template-ng-style.component.scss']
})
export class TemplateNgStyleComponent implements OnInit {
  public currentStyles: {};
  public canSave: boolean = false;
  public isUnchanged: boolean = false;
  public isSpecial: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  setCurrentStyles() {
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '36px' : '12px'
    };
  }

}
