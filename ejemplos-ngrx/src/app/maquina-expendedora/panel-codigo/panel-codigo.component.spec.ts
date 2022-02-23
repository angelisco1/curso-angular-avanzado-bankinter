import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCodigoComponent } from './panel-codigo.component';

describe('PanelCodigoComponent', () => {
  let component: PanelCodigoComponent;
  let fixture: ComponentFixture<PanelCodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelCodigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
