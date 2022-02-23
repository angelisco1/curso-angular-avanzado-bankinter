
import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../maquina-expendedora/interfaces/app.interfaces';
import { maquinaExpReducer } from './reducers/maquina-expendedora.reducers';


export const AppReducers: ActionReducerMap<IAppState> = {
  maquinaExpendedora: maquinaExpReducer,
}