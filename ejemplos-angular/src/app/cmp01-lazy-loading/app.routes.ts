import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./inicio/inicio.component";


const APP_ROUTES: Routes = [
  { path: '', component: InicioComponent },
  { path: 'admin', loadChildren: () => import('../cmp01-admin/cmp01-admin.module').then(module => module.Cmp01AdminModule) },
  // { path: 'admin', loadChildren: '../cmp01-admin/cmp01-admin.module#Cmp01AdminModule' },
]

export const RoutingModule = RouterModule.forRoot(APP_ROUTES)