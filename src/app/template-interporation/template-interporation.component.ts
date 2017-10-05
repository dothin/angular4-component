import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-interporation',
  templateUrl: './template-interporation.component.html',
  styleUrls: ['./template-interporation.component.scss']
})
export class TemplateInterporationComponent implements OnInit {

  public gameTitle: string = 'welcome to start angular component!';

  constructor() { }

  ngOnInit() {
  }

  public getGameName(): string {
    return 'function test';
  }

}
