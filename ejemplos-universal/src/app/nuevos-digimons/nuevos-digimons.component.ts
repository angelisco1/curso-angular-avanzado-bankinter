import { Component, OnInit } from '@angular/core';
import { DigimonsService } from '../digimons.service';

@Component({
  selector: 'app-nuevos-digimons',
  templateUrl: './nuevos-digimons.component.html',
  styleUrls: ['./nuevos-digimons.component.css']
})
export class NuevosDigimonsComponent implements OnInit {
  listaDigimons: Array<any> = []
  constructor(private digimonsService: DigimonsService) { }

  ngOnInit(): void {
    this.digimonsService.getNuevosDigimons()
      .subscribe((digimons: any) => {
        this.listaDigimons = digimons
      })
  }

  guardar() {
    const nuevoDigimon = {
      name: 'Canoweissmon',
      img: 'https://static.wikia.nocookie.net/digimon/images/0/08/Canoweissmon_b.jpg',
      level: 'perfect'
    }
    this.digimonsService.createNuevoDigimon(nuevoDigimon)
      .subscribe(() => {})
  }

}
