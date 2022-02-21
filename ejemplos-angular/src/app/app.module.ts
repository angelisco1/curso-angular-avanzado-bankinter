import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    FinComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    // MiRouterModule
    MiRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
