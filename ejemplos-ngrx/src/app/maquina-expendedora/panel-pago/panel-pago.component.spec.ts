import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelPagoComponent } from './panel-pago.component';

describe('PanelPagoComponent', () => {
  let component: PanelPagoComponent;
  let fixture: ComponentFixture<PanelPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
