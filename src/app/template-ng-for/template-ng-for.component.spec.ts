import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateNgForComponent } from './template-ng-for.component';

describe('TemplateNgForComponent', () => {
  let component: TemplateNgForComponent;
  let fixture: ComponentFixture<TemplateNgForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateNgForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
