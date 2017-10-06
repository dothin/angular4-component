import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSafeNavComponent } from './template-safe-nav.component';

describe('TemplateSafeNavComponent', () => {
  let component: TemplateSafeNavComponent;
  let fixture: ComponentFixture<TemplateSafeNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateSafeNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSafeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
