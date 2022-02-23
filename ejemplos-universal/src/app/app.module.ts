import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigimonComponent } from './digimon/digimon.component';
import { DigimonsComponent } from './digimons/digimons.component';
import { NuevosDigimonsComponent } from './nuevos-digimons/nuevos-digimons.component';

@NgModule({
  declarations: [
    AppComponent,
    DigimonComponent,
    DigimonsComponent,
    NuevosDigimonsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
