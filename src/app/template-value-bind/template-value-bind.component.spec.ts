import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateValueBindComponent } from './template-value-bind.component';

describe('TemplateValueBindComponent', () => {
  let component: TemplateValueBindComponent;
  let fixture: ComponentFixture<TemplateValueBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateValueBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateValueBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
