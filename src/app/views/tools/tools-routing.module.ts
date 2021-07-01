import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToolsComponent} from '@app/views/tools/tools/tools.component';
import {GeneComponent} from '@app/views/tools/gene/gene.component';

const routes: Routes = [
  { path: '', component: ToolsComponent},
  { path: 'genes', component: GeneComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
