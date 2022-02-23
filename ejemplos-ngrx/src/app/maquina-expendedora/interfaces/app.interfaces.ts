export interface IProducto {
  codigo: number,
  stock: number,
  sinStock: boolean,
  precio: number,
  nombre: string
}

export interface IDatosPanelEstado {
  totalRecaudado: number,
  stockTotal: number,
  cargando: boolean
}

export interface IMaquinaExpState {
  productos: Array<IProducto>,
  cargando: boolean,
  stockTotal: number,
  totalRecaudado: number,
  dineroInsertado: number,
  dineroADevolver: number,
}

export interface IAppState {
  maquinaExpendedora: IMaquinaExpState
}