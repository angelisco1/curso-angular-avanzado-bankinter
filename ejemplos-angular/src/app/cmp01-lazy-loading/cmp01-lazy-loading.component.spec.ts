import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp01LazyLoadingComponent } from './cmp01-lazy-loading.component';

describe('Cmp01LazyLoadingComponent', () => {
  let component: Cmp01LazyLoadingComponent;
  let fixture: ComponentFixture<Cmp01LazyLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp01LazyLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp01LazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
