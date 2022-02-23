import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelEstadoComponent } from './panel-estado.component';

describe('PanelEstadoComponent', () => {
  let component: PanelEstadoComponent;
  let fixture: ComponentFixture<PanelEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelEstadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
