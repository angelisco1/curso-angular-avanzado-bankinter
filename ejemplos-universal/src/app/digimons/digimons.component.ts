import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DigimonsService } from '../digimons.service';

@Component({
  selector: 'app-digimons',
  templateUrl: './digimons.component.html',
  styleUrls: ['./digimons.component.css']
})
export class DigimonsComponent implements OnInit {
  listaDigimons: Array<any> = []

  constructor(private activatedRoute: ActivatedRoute, private digimonsService: DigimonsService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if (params.has('level')) {
        const level = params.get('level')!
        this.digimonsService.getDigimonsByLevel(level)
          .subscribe((digimons: any) => {
            this.listaDigimons = digimons
          })
      } else {
        this.digimonsService.getDigimons()
          .subscribe((digimons: any) => {
            this.listaDigimons = digimons
          })
      }
    })
  }

}
