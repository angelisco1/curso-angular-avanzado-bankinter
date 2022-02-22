import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DigimonsService } from '../digimons.service';

@Component({
  selector: 'app-digimon',
  templateUrl: './digimon.component.html',
  styleUrls: ['./digimon.component.css']
})
export class DigimonComponent implements OnInit {
  digimon: any = null

  constructor(private digimonsService: DigimonsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const nombre = this.activatedRoute.snapshot.paramMap.get('name')!
    this.digimonsService.getDigimonByName(nombre)
      .subscribe(digimon => {
        this.digimon = digimon
      })
  }

}
