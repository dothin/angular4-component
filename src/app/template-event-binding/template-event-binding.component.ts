import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-event-binding',
  templateUrl: './template-event-binding.component.html',
  styleUrls: ['./template-event-binding.component.scss']
})
export class TemplateEventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public btnClick(event): void {
    alert('test event binding');
  }

}
