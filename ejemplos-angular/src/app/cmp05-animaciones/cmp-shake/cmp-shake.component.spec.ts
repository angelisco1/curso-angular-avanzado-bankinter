import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpShakeComponent } from './cmp-shake.component';

describe('CmpShakeComponent', () => {
  let component: CmpShakeComponent;
  let fixture: ComponentFixture<CmpShakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpShakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpShakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
