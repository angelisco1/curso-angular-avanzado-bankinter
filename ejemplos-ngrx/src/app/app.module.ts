import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaquinaExpendedoraComponent } from './maquina-expendedora/maquina-expendedora.component';
import { ProductosComponent } from './maquina-expendedora/productos/productos.component';
import { ProductoComponent } from './maquina-expendedora/producto/producto.component';
import { PanelEstadoComponent } from './maquina-expendedora/panel-estado/panel-estado.component';
import { PanelCodigoComponent } from './maquina-expendedora/panel-codigo/panel-codigo.component';
import { PanelPagoComponent } from './maquina-expendedora/panel-pago/panel-pago.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppReducers } from './state/app.state';
import { MaquinaExpEffects } from './state/effects/maquina-expendedora.effects';

@NgModule({
  declarations: [
    AppComponent,
    MaquinaExpendedoraComponent,
    ProductosComponent,
    ProductoComponent,
    PanelEstadoComponent,
    PanelCodigoComponent,
    PanelPagoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(AppReducers, {}),
    EffectsModule.forRoot([MaquinaExpEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
