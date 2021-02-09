import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './views/basics/main/main.component';
import { FooterComponent } from './views/basics/footer/footer.component';
import { HeaderComponent } from './views/basics/header/header.component';
import { NotFoundComponent } from './views/basics/not-found/not-found.component';
import { TermsDataComponent } from './views/basics/terms-data/terms-data.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { FaqComponent } from './views/faq/faq.component';
import { MenuComponent } from './views/basics/menu/menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import {MatExpansionModule} from '@angular/material/expansion';
import {FilterPipeModule} from 'ngx-filter-pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    TermsDataComponent,
    FaqComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    NgxScrollTopModule,
    MatExpansionModule,
    FilterPipeModule,
    FormsModule,
  ],
  providers: [],
  exports: [
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
