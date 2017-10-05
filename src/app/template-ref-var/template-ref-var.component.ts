import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref-var',
  templateUrl: './template-ref-var.component.html',
  styleUrls: ['./template-ref-var.component.scss']
})
export class TemplateRefVarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public sayHello(name: string): void {
    alert(name);
  }
}
