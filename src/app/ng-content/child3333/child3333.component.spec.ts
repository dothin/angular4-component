/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Child3333Component } from './child3333.component';

describe('Child3333Component', () => {
  let component: Child3333Component;
  let fixture: ComponentFixture<Child3333Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child3333Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child3333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
