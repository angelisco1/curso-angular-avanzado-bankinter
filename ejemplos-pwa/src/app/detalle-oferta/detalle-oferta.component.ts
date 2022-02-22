import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../oferta';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-detalle-oferta',
  templateUrl: './detalle-oferta.component.html',
  styleUrls: ['./detalle-oferta.component.css']
})
export class DetalleOfertaComponent implements OnInit {
  datosOferta: Oferta | null = null

  constructor(private activatedRoute: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')!
    this.ofertasService.getOfertaById(id)
      .subscribe((oferta: Oferta) => {
        this.datosOferta = oferta
      })
  }

}
