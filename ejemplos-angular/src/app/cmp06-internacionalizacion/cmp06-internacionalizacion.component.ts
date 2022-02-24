import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp06-internacionalizacion',
  templateUrl: './cmp06-internacionalizacion.component.html',
  styleUrls: ['./cmp06-internacionalizacion.component.css']
})
export class Cmp06InternacionalizacionComponent implements OnInit {
  precio: number = 28
  fecha: Date = new Date()
  locales: Array<any> = [
    { href: '/en-US', label: 'EN' },
    { href: '/es', label: 'ES' },
    { href: '/fr', label: 'FR' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
