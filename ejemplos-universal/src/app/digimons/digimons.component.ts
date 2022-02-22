import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  }

}
