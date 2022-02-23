import { createReducer, on } from "@ngrx/store";
import { IMaquinaExpState, IProducto } from "src/app/maquina-expendedora/interfaces/app.interfaces";
import { cargarMaquina, maquinaCargada, sacarProducto } from "../actions/maquina-expendedora.actions";


const initialState: IMaquinaExpState = {
  productos: [],
  cargando: false,
  stockTotal: 0,
  totalRecaudado: 0,
  dineroInsertado: 0,
  dineroADevolver: 0,
}

export const maquinaExpReducer = createReducer(
  initialState,
  on(cargarMaquina, (state) => {
    return {
      ...state,
      cargando: true
    }
  }),
  on(maquinaCargada, (state, action) => {
    return {
      ...state,
      cargando: false,
      productos: action.productos,
      stockTotal: action.productos.reduce((acc: number, producto: IProducto) => {
        return acc += producto.stock
      }, 0)
    }
  }),
  on(sacarProducto, (state, action) => {
    const producto = state.productos.find(p => p.codigo == action.codigo)
    console.log({producto})
    console.log({action})

    if (producto) {
      const productosActualizados = state.productos.map(p => {
        if (p.codigo == action.codigo) {
          return {
            ...p,
            stock: p.stock - 1
          }
        } else {
          return {...p}
        }
      })

      return {
        ...state,
        productos: productosActualizados,
        stockTotal: state.stockTotal - 1,
        totalRecaudado: state.totalRecaudado + producto.precio
      }
    } else {
      return state
    }
  })
)