import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FabryComponent} from '@app/views/info/enfermedades/fabry/fabry.component';
import {GaucherComponent} from '@app/views/info/enfermedades/gaucher/gaucher.component';
import {PompeComponent} from '@app/views/info/enfermedades/pompe/pompe.component';
import {MpsiComponent} from '@app/views/info/enfermedades/mpsi/mpsi.component';
import {InfoComponent} from '@app/views/info/info/info.component';
import {EnfermedadesComponent} from '@app/views/info/enfermedades/enfermedades.component';

const routes: Routes = [
  { path: '', component: InfoComponent},
  { path: 'enfermedades', component: EnfermedadesComponent, children: [
      { path: 'fabry', component: FabryComponent},
      { path: 'gaucher', component: GaucherComponent},
      { path: 'pompe', component: PompeComponent},
      { path: 'mps1', component: MpsiComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
