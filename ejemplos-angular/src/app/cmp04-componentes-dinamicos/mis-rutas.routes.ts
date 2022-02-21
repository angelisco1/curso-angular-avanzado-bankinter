import { MiRouterModule } from "../mi-router/mi-router.module";
import { FinComponent } from "./fin/fin.component";
import { InicioComponent } from "./inicio/inicio.component";


const APP_ROUTES = [
  { path: '', component: InicioComponent },
  { path: 'fin', component: FinComponent },
]

export const MiRoutingModule = MiRouterModule.forRoot(APP_ROUTES)