import { Component, Input, OnInit } from '@angular/core';
import { IProducto } from '../interfaces/app.interfaces';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() producto!: IProducto;

  constructor() { }

  ngOnInit(): void {
  }

}
