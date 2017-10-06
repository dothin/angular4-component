import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../service/service.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  constructor(public eventBusService: EventBusService) { }

  ngOnInit() {
  }

  public triggerEventBus(): void {
    this.eventBusService.eventBus.next('第一个组件触发的事件');
  }

}
