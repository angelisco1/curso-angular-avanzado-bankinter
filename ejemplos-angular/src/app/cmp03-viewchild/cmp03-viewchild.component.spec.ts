import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp03ViewchildComponent } from './cmp03-viewchild.component';

describe('Cmp03ViewchildComponent', () => {
  let component: Cmp03ViewchildComponent;
  let fixture: ComponentFixture<Cmp03ViewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp03ViewchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp03ViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
