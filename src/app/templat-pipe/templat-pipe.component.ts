import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templat-pipe',
  templateUrl: './templat-pipe.component.html',
  styleUrls: ['./templat-pipe.component.scss']
})
export class TemplatPipeComponent implements OnInit {
  public currentTime: Date = new Date();

  constructor() { }

  ngOnInit() {
    window.setInterval(
      () => {
        this.currentTime = new Date();
      }
      , 1000);
  }

}
