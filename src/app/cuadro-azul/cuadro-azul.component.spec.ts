import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroAzulComponent } from './cuadro-azul.component';

describe('CuadroAzulComponent', () => {
  let component: CuadroAzulComponent;
  let fixture: ComponentFixture<CuadroAzulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadroAzulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadroAzulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
