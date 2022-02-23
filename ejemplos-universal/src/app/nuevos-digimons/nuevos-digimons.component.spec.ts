import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevosDigimonsComponent } from './nuevos-digimons.component';

describe('NuevosDigimonsComponent', () => {
  let component: NuevosDigimonsComponent;
  let fixture: ComponentFixture<NuevosDigimonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevosDigimonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevosDigimonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
