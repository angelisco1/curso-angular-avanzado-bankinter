import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleOfertaComponent } from './detalle-oferta/detalle-oferta.component';
import { InicioComponent } from './inicio/inicio.component';
import { NuevaOfertaComponent } from './nueva-oferta/nueva-oferta.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'nueva-oferta', component: NuevaOfertaComponent },
  { path: 'ofertas/:id', component: DetalleOfertaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
