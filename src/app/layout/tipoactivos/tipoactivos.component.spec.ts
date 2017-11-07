import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoactivosComponent } from './tipoactivos.component';

describe('TipoactivosComponent', () => {
  let component: TipoactivosComponent;
  let fixture: ComponentFixture<TipoactivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoactivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoactivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
