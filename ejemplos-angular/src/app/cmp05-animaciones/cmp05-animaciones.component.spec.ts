import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp05AnimacionesComponent } from './cmp05-animaciones.component';

describe('Cmp05AnimacionesComponent', () => {
  let component: Cmp05AnimacionesComponent;
  let fixture: ComponentFixture<Cmp05AnimacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp05AnimacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp05AnimacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
