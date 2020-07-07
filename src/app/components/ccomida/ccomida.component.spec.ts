import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcomidaComponent } from './ccomida.component';

describe('CcomidaComponent', () => {
  let component: CcomidaComponent;
  let fixture: ComponentFixture<CcomidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcomidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcomidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
