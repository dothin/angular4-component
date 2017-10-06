import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-onchanges',
  templateUrl: './test-ng-onchanges.component.html',
  styleUrls: ['./test-ng-onchanges.component.scss']
})
export class TestNgOnchangesComponent implements OnInit {
  public userName: string = '默认用户1';
  public userObj: any = { userName: '默认用户2' };

  constructor() { }

  ngOnInit() {
  }

}
