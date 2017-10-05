import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateNgSwitchComponent } from './template-ng-switch.component';

describe('TemplateNgSwitchComponent', () => {
  let component: TemplateNgSwitchComponent;
  let fixture: ComponentFixture<TemplateNgSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateNgSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
