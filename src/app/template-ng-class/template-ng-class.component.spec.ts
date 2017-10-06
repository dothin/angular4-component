import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateNgClassComponent } from './template-ng-class.component';

describe('TemplateNgClassComponent', () => {
  let component: TemplateNgClassComponent;
  let fixture: ComponentFixture<TemplateNgClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateNgClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
