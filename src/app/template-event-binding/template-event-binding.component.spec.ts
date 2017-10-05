import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateEventBindingComponent } from './template-event-binding.component';

describe('TemplateEventBindingComponent', () => {
  let component: TemplateEventBindingComponent;
  let fixture: ComponentFixture<TemplateEventBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateEventBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
