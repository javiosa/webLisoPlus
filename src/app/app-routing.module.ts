import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FaqComponent} from '@app/views/faq/faq.component';
import {TermsDataComponent} from '@app/views/basics/terms-data/terms-data.component';
import {NotFoundComponent} from '@app/views/basics/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'info',
    loadChildren: () =>
      import('./views/info/info.module').then((m) => m.InfoModule),
  },
  {
    path: 'tools',
    loadChildren: () =>
      import('./views/tools/tools.module').then((m) => m.ToolsModule),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./views/blog/blog.module').then((m) => m.BlogModule),
  },
  { path: 'faq', component: FaqComponent },
  { path: 'termsData', component: TermsDataComponent },
  { path: 'not-found', component: NotFoundComponent},
  // otherwise redirect to not found
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
