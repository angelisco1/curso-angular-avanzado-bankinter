import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonComponent } from './digimon.component';

describe('DigimonComponent', () => {
  let component: DigimonComponent;
  let fixture: ComponentFixture<DigimonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigimonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
