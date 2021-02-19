import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { LearningComponent } from './learning/learning.component';
import {SharedModule} from '@app/views/shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GalleryModule} from 'ng-gallery';


@NgModule({
  declarations: [LearningComponent],
    imports: [
        CommonModule,
        LearningRoutingModule,
        SharedModule,
        GalleryModule
    ]
})
export class LearningModule { }
