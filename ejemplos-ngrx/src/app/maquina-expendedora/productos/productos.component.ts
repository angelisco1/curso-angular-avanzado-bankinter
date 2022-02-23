import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProductos } from 'src/app/state/selectors/maquina-expendedora.selectors';
import { IAppState, IProducto } from '../interfaces/app.interfaces';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Array<IProducto> = []

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.store.select(selectProductos)
      .subscribe(productos => this.productos = productos)
    // this.productosService.getProductos()
    //   .subscribe((productos: Array<IProducto>) => {
    //     this.productos = productos
    //   })
  }

}
