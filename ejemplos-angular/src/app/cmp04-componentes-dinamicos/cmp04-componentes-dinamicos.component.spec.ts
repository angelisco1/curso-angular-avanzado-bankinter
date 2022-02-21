import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp04ComponentesDinamicosComponent } from './cmp04-componentes-dinamicos.component';

describe('Cmp04ComponentesDinamicosComponent', () => {
  let component: Cmp04ComponentesDinamicosComponent;
  let fixture: ComponentFixture<Cmp04ComponentesDinamicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp04ComponentesDinamicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp04ComponentesDinamicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
