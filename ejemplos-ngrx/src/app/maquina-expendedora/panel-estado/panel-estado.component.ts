import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState, IDatosPanelEstado } from '../interfaces/app.interfaces';
import { selectPanelEstado } from '../../state/selectors/maquina-expendedora.selectors';

@Component({
  selector: 'app-panel-estado',
  templateUrl: './panel-estado.component.html',
  styleUrls: ['./panel-estado.component.css']
})
export class PanelEstadoComponent implements OnInit {
  datosEstado$!: Observable<IDatosPanelEstado>;
  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.datosEstado$ = this.store.select(selectPanelEstado)
  }

}
