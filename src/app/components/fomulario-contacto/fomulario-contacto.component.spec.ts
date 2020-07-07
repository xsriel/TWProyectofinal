import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FomularioContactoComponent } from './fomulario-contacto.component';

describe('FomularioContactoComponent', () => {
  let component: FomularioContactoComponent;
  let fixture: ComponentFixture<FomularioContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FomularioContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FomularioContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
