import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatPipeComponent } from './templat-pipe.component';

describe('TemplatPipeComponent', () => {
  let component: TemplatPipeComponent;
  let fixture: ComponentFixture<TemplatPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
