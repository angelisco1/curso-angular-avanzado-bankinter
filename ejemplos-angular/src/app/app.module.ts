import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RoutingModule } from './cmp01-lazy-loading/app.routes';
import { Cmp01LazyLoadingComponent } from './cmp01-lazy-loading/cmp01-lazy-loading.component';
import { InicioComponent } from './cmp01-lazy-loading/inicio/inicio.component';
import { Cmp02TransclusionComponent } from './cmp02-transclusion/cmp02-transclusion.component';
import { AcordeonComponent } from './cmp02-transclusion/acordeon/acordeon.component';
import { Cmp03ViewchildComponent } from './cmp03-viewchild/cmp03-viewchild.component';
import { ModalComponent } from './cmp03-viewchild/modal/modal.component';
import { Cmp04ComponentesDinamicosComponent } from './cmp04-componentes-dinamicos/cmp04-componentes-dinamicos.component';
import { VideoComponent } from './cmp04-componentes-dinamicos/video/video.component';
import { AudioComponent } from './cmp04-componentes-dinamicos/audio/audio.component';
import { HostDirective } from './cmp04-componentes-dinamicos/host.directive';
import { FinComponent } from './cmp04-componentes-dinamicos/fin/fin.component';
import { MiRouterModule } from './mi-router/mi-router.module';
import { MiRoutingModule } from './cmp04-componentes-dinamicos/mis-rutas.routes';
import { Cmp05AnimacionesComponent } from './cmp05-animaciones/cmp05-animaciones.component';
import { CmpShakeComponent } from './cmp05-animaciones/cmp-shake/cmp-shake.component';
import { CmpZoomComponent } from './cmp05-animaciones/cmp-zoom/cmp-zoom.component';
import { Cmp06InternacionalizacionComponent } from './cmp06-internacionalizacion/cmp06-internacionalizacion.component';

@NgModule({
  declarations: [
    AppComponent,
    Cmp01LazyLoadingComponent,
    InicioComponent,
    Cmp02TransclusionComponent,
    AcordeonComponent,
    Cmp03ViewchildComponent,
    ModalComponent,
    Cmp04ComponentesDinamicosComponent,
    VideoComponent,
    AudioComponent,
    HostDirective,
    FinComponent,
    Cmp05AnimacionesComponent,
    CmpShakeComponent,
    CmpZoomComponent,
    Cmp06InternacionalizacionComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    // MiRouterModule
    MiRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
