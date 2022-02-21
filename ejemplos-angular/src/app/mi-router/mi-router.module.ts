import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiRouterOutletComponent } from './mi-router-outlet/mi-router-outlet.component';
import { MiRouterLinkDirective } from './mi-router-link.directive';
import { MiHostDirective } from './mi-host.directive';



@NgModule({
  declarations: [
    MiRouterOutletComponent,
    MiRouterLinkDirective,
    MiHostDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MiRouterOutletComponent,
    MiRouterLinkDirective,
  ]
})
export class MiRouterModule {

  static forRoot(rutas: Array<any>): ModuleWithProviders<MiRouterModule> {
    return {
      ngModule: MiRouterModule,
      providers: [
        { provide: 'MIS_RUTAS', useValue: rutas }
      ]
    }
  }
}
