import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpZoomComponent } from './cmp-zoom.component';

describe('CmpZoomComponent', () => {
  let component: CmpZoomComponent;
  let fixture: ComponentFixture<CmpZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpZoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
