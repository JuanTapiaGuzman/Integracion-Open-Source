import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepreciacionAcumuladaComponent } from './depreciacion-acumulada.component';

describe('DepreciacionAcumuladaComponent', () => {
  let component: DepreciacionAcumuladaComponent;
  let fixture: ComponentFixture<DepreciacionAcumuladaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepreciacionAcumuladaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepreciacionAcumuladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
