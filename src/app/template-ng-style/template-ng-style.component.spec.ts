import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateNgStyleComponent } from './template-ng-style.component';

describe('TemplateNgStyleComponent', () => {
  let component: TemplateNgStyleComponent;
  let fixture: ComponentFixture<TemplateNgStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateNgStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
