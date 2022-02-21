import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelAdminComponent } from './panel-admin/panel-admin.component';
import { AdminRoutingModule } from './admin.routes';



@NgModule({
  declarations: [
    PanelAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class Cmp01AdminModule { }
