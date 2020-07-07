import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcafesComponent } from './tcafes.component';

describe('TcafesComponent', () => {
  let component: TcafesComponent;
  let fixture: ComponentFixture<TcafesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcafesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcafesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
