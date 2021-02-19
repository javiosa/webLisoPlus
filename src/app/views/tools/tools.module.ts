import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { ToolsComponent } from './tools/tools.component';
import {MatDividerModule} from '@angular/material/divider';
import { GeneComponent } from './gene/gene.component';
import {AppModule} from '@app/app.module';
import {SharedModule} from '@app/views/shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatRadioModule} from '@angular/material/radio';
import { GeneResultComponent } from './gene/gene-result/gene-result.component';
import { VariantResultComponent } from './gene/variant-result/variant-result.component';
import { DiseaseResultComponent } from './gene/disease-result/disease-result.component';


@NgModule({
  declarations: [ToolsComponent, GeneComponent, GeneResultComponent, VariantResultComponent, DiseaseResultComponent],
  imports: [
    CommonModule,
    ToolsRoutingModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatChipsModule,
    FormsModule,
    MatRadioModule
  ]
})
export class ToolsModule { }
