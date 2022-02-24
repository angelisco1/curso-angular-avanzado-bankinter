import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp06InternacionalizacionComponent } from './cmp06-internacionalizacion.component';

describe('Cmp06InternacionalizacionComponent', () => {
  let component: Cmp06InternacionalizacionComponent;
  let fixture: ComponentFixture<Cmp06InternacionalizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp06InternacionalizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp06InternacionalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
