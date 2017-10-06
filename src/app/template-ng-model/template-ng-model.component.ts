import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ng-model',
  templateUrl: './template-ng-model.component.html',
  styleUrls: ['./template-ng-model.component.scss']
})
export class TemplateNgModelComponent implements OnInit {
  public currentRace: any = { name: '随机种族' };

  constructor() { }

  ngOnInit() {
  }

}
