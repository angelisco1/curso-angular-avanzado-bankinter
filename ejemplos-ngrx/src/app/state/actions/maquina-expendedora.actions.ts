import { createAction, props } from "@ngrx/store";
import { IProducto } from "src/app/maquina-expendedora/interfaces/app.interfaces";
import * as ActionTypes from './action.types'

export const cargarMaquina = createAction(
  ActionTypes.CARGAR_MAQUINA
)

export const maquinaCargada = createAction(
  ActionTypes.MAQUINA_CARGADA,
  props<{productos: Array<IProducto>}>()
)

export const sacarProducto = createAction(
  ActionTypes.SACAR_PRODUCTO,
  props<{codigo: number}>()
)