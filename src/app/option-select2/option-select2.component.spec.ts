import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionSelect2Component } from './option-select2.component';

describe('OptionSelect2Component', () => {
  let component: OptionSelect2Component;
  let fixture: ComponentFixture<OptionSelect2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionSelect2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionSelect2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
