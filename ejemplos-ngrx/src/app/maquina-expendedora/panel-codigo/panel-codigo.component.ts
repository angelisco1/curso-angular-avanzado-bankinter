import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { sacarProducto } from 'src/app/state/actions/maquina-expendedora.actions';
import { IAppState } from '../interfaces/app.interfaces';

@Component({
  selector: 'app-panel-codigo',
  templateUrl: './panel-codigo.component.html',
  styleUrls: ['./panel-codigo.component.css']
})
export class PanelCodigoComponent implements OnInit {
  formCodigo: FormGroup;

  constructor(private store: Store<IAppState>) {
    this.formCodigo = new FormGroup({
      codigo: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  sacarProducto(): void {
    const codigo = this.formCodigo.value
    this.store.dispatch(sacarProducto(codigo))
  }

}
