import { Component, OnInit } from '@angular/core';
import { Oferta } from '../oferta';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  listaOfertas: Array<Oferta> = []

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertasService.getOfertas()
      .subscribe((ofertas: Array<Oferta>) => {
        this.listaOfertas = ofertas
      })
  }

}
