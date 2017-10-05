import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTwoWayBindingComponent } from './template-two-way-binding.component';

describe('TemplateTwoWayBindingComponent', () => {
  let component: TemplateTwoWayBindingComponent;
  let fixture: ComponentFixture<TemplateTwoWayBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateTwoWayBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
