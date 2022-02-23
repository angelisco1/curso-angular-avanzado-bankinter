import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigimonComponent } from './digimon/digimon.component';
import { DigimonsComponent } from './digimons/digimons.component';
import { NuevosDigimonsComponent } from './nuevos-digimons/nuevos-digimons.component';

const routes: Routes = [
  { path: '', component: DigimonsComponent },
  { path: 'digimons/:name', component: DigimonComponent },
  { path: 'digimons/level/:level', component: DigimonsComponent },
  { path: 'nuevos-digimons', component: NuevosDigimonsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
