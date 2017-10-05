import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateNgIfComponent } from './template-ng-if.component';

describe('TemplateNgIfComponent', () => {
  let component: TemplateNgIfComponent;
  let fixture: ComponentFixture<TemplateNgIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateNgIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
