import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ng-if',
  templateUrl: './template-ng-if.component.html',
  styleUrls: ['./template-ng-if.component.scss']
})
export class TemplateNgIfComponent implements OnInit {
  public isShow: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  public toggleShow(): void {
    this.isShow = !this.isShow;
  }

}
