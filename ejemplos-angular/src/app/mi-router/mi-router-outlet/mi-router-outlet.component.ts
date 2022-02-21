import { Component, AfterViewInit, ViewChild, Inject } from '@angular/core';
import { FinComponent } from 'src/app/cmp04-componentes-dinamicos/fin/fin.component';
import { InicioComponent } from 'src/app/cmp04-componentes-dinamicos/inicio/inicio.component';
import { MiHostDirective } from '../mi-host.directive';
import { MiRouterService } from '../mi-router.service';

@Component({
  selector: 'app-mi-router-outlet',
  templateUrl: './mi-router-outlet.component.html',
  styleUrls: ['./mi-router-outlet.component.css']
})
export class MiRouterOutletComponent implements AfterViewInit {
  @ViewChild(MiHostDirective) host!: MiHostDirective

  constructor(private miRouter: MiRouterService, @Inject('MIS_RUTAS') private rutas: any) { }

  // ---- ANGULAR 11
  // constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit(): void {
    this.miRouter.rutaCambiada$.subscribe((path: string) => {
      const ruta = this.rutas.find((r: any) => '/' + r.path === path)
      if (ruta) {
        this.mostrarPagina(ruta.component)
      } else {
        console.error(`La ruta ${path} no existe...`)
      }
      // switch (path) {
      //   case '/':
      //     this.mostrarPagina(InicioComponent)
      //     break;
      //   case '/fin':
      //     this.mostrarPagina(FinComponent)
      //     break;
      // }

    })
  }

  mostrarPagina(cmp: any) {
    // ---- ANGULAR 11
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(InicioComponent);
    // this.host.viewContainerRef.clear();
    // this.host.viewContainerRef.createComponent(componentFactory)


    this.host.viewContainerRef.clear();
    this.host.viewContainerRef.createComponent(cmp)
  }

}
