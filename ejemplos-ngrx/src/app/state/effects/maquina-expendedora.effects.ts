import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { IProducto } from "src/app/maquina-expendedora/interfaces/app.interfaces";
import { ProductosService } from "src/app/maquina-expendedora/services/productos.service";
import { CARGAR_MAQUINA } from '../actions/action.types';
import { maquinaCargada } from "../actions/maquina-expendedora.actions";



@Injectable()
export class MaquinaExpEffects {

  cargarProductos$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(CARGAR_MAQUINA),
        mergeMap(() => this.productosService.getProductos()),
        map((productos: Array<IProducto>) => {
          return maquinaCargada({productos})
        })
      )
  })

  constructor(private productosService: ProductosService, private actions$: Actions) {

  }

}