import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ng-for',
  templateUrl: './template-ng-for.component.html',
  styleUrls: ['./template-ng-for.component.scss']
})
export class TemplateNgForComponent implements OnInit {
  public races: Array<any> = [
    { name: '人族' },
    { name: '魔族' },
    { name: '神族' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
