import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateNgModelComponent } from './template-ng-model.component';

describe('TemplateNgModelComponent', () => {
  let component: TemplateNgModelComponent;
  let fixture: ComponentFixture<TemplateNgModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateNgModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
