import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToolsComponent} from '@app/views/tools/tools/tools.component';
import {LearningComponent} from '@app/views/learning/learning/learning.component';

const routes: Routes = [
  { path: '', component: LearningComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningRoutingModule { }
