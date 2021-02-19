import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from '@app/views/basics/menu/menu.component';
import {SectionTitleComponent} from '@app/views/shared/section-title/section-title.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import { InfoSelectorComponent } from './info-selector/info-selector.component';



@NgModule({
  declarations: [
    SectionTitleComponent,
    InfoSelectorComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
    exports: [
        SectionTitleComponent,
        InfoSelectorComponent
    ]
})
export class SharedModule { }
