import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSelect2Component } from './app-select2.component';

describe('AppSelect2Component', () => {
  let component: AppSelect2Component;
  let fixture: ComponentFixture<AppSelect2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSelect2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSelect2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
