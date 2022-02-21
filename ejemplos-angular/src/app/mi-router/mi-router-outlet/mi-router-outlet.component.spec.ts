import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiRouterOutletComponent } from './mi-router-outlet.component';

describe('MiRouterOutletComponent', () => {
  let component: MiRouterOutletComponent;
  let fixture: ComponentFixture<MiRouterOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiRouterOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiRouterOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
