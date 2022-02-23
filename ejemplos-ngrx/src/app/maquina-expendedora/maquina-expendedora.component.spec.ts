import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinaExpendedoraComponent } from './maquina-expendedora.component';

describe('MaquinaExpendedoraComponent', () => {
  let component: MaquinaExpendedoraComponent;
  let fixture: ComponentFixture<MaquinaExpendedoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaquinaExpendedoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinaExpendedoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
