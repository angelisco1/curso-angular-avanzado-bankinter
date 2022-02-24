import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { OfertasService } from '../ofertas.service';

import { NuevaOfertaComponent } from './nueva-oferta.component';

fdescribe('NuevaOfertaComponent', () => {
  let component: NuevaOfertaComponent;
  let fixture: ComponentFixture<NuevaOfertaComponent>;
  let mockRouter: any
  let mockOfertasService: any

  beforeEach(async () => {

    mockRouter = jasmine.createSpyObj(Router, ['navigate'])
    mockOfertasService = jasmine.createSpyObj(OfertasService, ['createOferta'])

    await TestBed.configureTestingModule({
      declarations: [ NuevaOfertaComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: OfertasService, useValue: mockOfertasService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería de llamar a createOferta con los datos del formulario', () => {
    const mockOferta = {
      titulo: 'A',
      empresa: 'A',
      salario: 0,
      ciudad: 'A',
      descripcion: 'A'
    }
    mockOfertasService.createOferta.and.returnValue(of({}))

    component.formOferta.setValue(mockOferta)
    fixture.detectChanges()
    component.guardar()

    expect(mockOfertasService.createOferta).toHaveBeenCalledOnceWith(mockOferta)
    expect(mockRouter.navigate).toHaveBeenCalledOnceWith(['/'])
  })

  it('el botón debería de estar deshabilitado si no se escribe el título', () => {
    const button = fixture.debugElement.query(By.css('button'))
    expect(button.nativeElement.disabled).toBeTrue()
  })

  it('el botón debería de estar habilitado si rellenamos el título', () => {
    component.formOferta.get('titulo')?.setValue('A')

    fixture.detectChanges()

    const button = fixture.debugElement.query(By.css('button'))
    expect(button.nativeElement.disabled).toBeFalse()
  })

});
