import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cargarMaquina, maquinaCargada } from '../state/actions/maquina-expendedora.actions';
import { selectCargandoMaquina } from '../state/selectors/maquina-expendedora.selectors';
import { IAppState, IProducto } from './interfaces/app.interfaces';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-maquina-expendedora',
  templateUrl: './maquina-expendedora.component.html',
  styleUrls: ['./maquina-expendedora.component.css']
})
export class MaquinaExpendedoraComponent implements OnInit {
  cargando$!: Observable<boolean>
  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.cargando$ = this.store.select(selectCargandoMaquina)
    this.store.dispatch(cargarMaquina())

    // EFFECTS
    // this.productosService.getProductos()
    //   .subscribe((productos: Array<IProducto>) => {
    //     this.store.dispatch(maquinaCargada({productos}))
    //   })
  }

}
