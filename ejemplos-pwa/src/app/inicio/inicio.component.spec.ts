import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { OfertasService } from '../ofertas.service';

import { InicioComponent } from './inicio.component';

@Component({
  selector: 'app-oferta',
  template: `<p></p>`
})
class FakeOfertaComponent {
  @Input() oferta!: any
}

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;
  let mockOfertasService: any

  beforeEach(async () => {

    mockOfertasService = jasmine.createSpyObj(OfertasService, ['getOfertas'])

    await TestBed.configureTestingModule({
      declarations: [
        InicioComponent,
        FakeOfertaComponent,
      ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: OfertasService, useValue: mockOfertasService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería de pintar un elemento p por cada oferta', () => {
    const mockOfertas = [
      { titulo: '', salario: 0, empresa: '', ciudad: '', id: 1, descripcion: '' },
      { titulo: '', salario: 0, empresa: '', ciudad: '', id: 2, descripcion: '' },
    ]
    mockOfertasService.getOfertas.and.returnValue(of(mockOfertas))

    fixture.detectChanges()

    const listaParrafos = fixture.debugElement.queryAll(By.css('p'))
    expect(listaParrafos).toHaveSize(2)
  })
});
