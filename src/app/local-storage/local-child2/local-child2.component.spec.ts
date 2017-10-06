/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LocalChild2Component } from './local-child2.component';

describe('LocalChild2Component', () => {
  let component: LocalChild2Component;
  let fixture: ComponentFixture<LocalChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
