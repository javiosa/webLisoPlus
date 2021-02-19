import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { JumboComponent } from './home/jumbo/jumbo.component';
import { InfosectionComponent } from './home/infosection/infosection.component';
import { FaqsectionComponent } from './home/faqsection/faqsection.component';
import { ChannelsectionComponent } from './home/channelsection/channelsection.component';
import { ToolssectionComponent } from './home/toolssection/toolssection.component';
import {MatButtonModule} from '@angular/material/button';
import {NgImageSliderModule} from 'ng-image-slider';
import {MatDividerModule} from '@angular/material/divider';
import {AnimateOnScrollModule} from 'ng2-animate-on-scroll';
import {NgwWowModule} from 'ngx-wow';
import {NgxScrollTopModule} from 'ngx-scrolltop';
import {MatIconModule} from '@angular/material/icon';
import { HeadComponent } from './home/head/head.component';
import {SharedModule} from '@app/views/shared/shared.module';


@NgModule({
  declarations: [HomeComponent, CarouselComponent, JumboComponent, InfosectionComponent, FaqsectionComponent, ChannelsectionComponent, ToolssectionComponent, HeadComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatButtonModule,
        NgImageSliderModule,
        MatDividerModule,
        NgwWowModule,
        AnimateOnScrollModule.forRoot(),
        MatIconModule,
        SharedModule
    ]
})
export class HomeModule { }
