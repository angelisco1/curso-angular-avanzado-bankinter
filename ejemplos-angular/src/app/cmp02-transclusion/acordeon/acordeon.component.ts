import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.css']
})
export class AcordeonComponent implements OnInit {
  @Input() titulo: string = ''
  abierto: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleAbierto(): void {
    this.abierto = !this.abierto
  }
}
