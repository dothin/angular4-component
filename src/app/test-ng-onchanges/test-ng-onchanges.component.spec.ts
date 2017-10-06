import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgOnchangesComponent } from './test-ng-onchanges.component';

describe('TestNgOnchangesComponent', () => {
  let component: TestNgOnchangesComponent;
  let fixture: ComponentFixture<TestNgOnchangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgOnchangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgOnchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
