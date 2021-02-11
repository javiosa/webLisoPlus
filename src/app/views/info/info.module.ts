import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info/info.component';
import { PompeComponent } from './enfermedades/pompe/pompe.component';
import { FabryComponent } from './enfermedades/fabry/fabry.component';
import { GaucherComponent } from './enfermedades/gaucher/gaucher.component';
import { MpsiComponent } from './enfermedades/mpsi/mpsi.component';
import { EnfermedadesComponent } from './enfermedades/enfermedades.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [InfoComponent, PompeComponent, FabryComponent, GaucherComponent, MpsiComponent, EnfermedadesComponent],
    imports: [
        CommonModule,
        InfoRoutingModule,
        MatTreeModule,
        MatIconModule,
        MatButtonModule,
        MatDividerModule
    ]
})
export class InfoModule { }
