import { createSelector } from "@ngrx/store";
import { IAppState, IMaquinaExpState } from "src/app/maquina-expendedora/interfaces/app.interfaces";


const selectMaquinaExpState = (state: IAppState) => state.maquinaExpendedora


export const selectCargandoMaquina = createSelector(
  selectMaquinaExpState,
  (state: IMaquinaExpState) => state.cargando
)

export const selectProductos = createSelector(
  selectMaquinaExpState,
  (state: IMaquinaExpState) => state.productos
)

export const selectPanelEstado = createSelector(
  selectMaquinaExpState,
  (state: IMaquinaExpState) => {
    const { cargando, totalRecaudado, stockTotal } = state
    return {
      cargando,
      totalRecaudado,
      stockTotal,
    }
  }
)