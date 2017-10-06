import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child111',
  templateUrl: './child111.component.html',
  styleUrls: ['./child111.component.scss']
})
export class Child111Component implements OnInit {
  @Input()
  public userName: string = '';
  @Input()
  public userObj: any = {};

  public age: number = 18;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 4));
  }

  ngDoCheck(): void {
    console.log('Child1 ngDoCheck...' + new Date());
  }

}
