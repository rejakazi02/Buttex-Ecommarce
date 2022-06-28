import { FooterModule } from './../shared/components/footer/footer.module';
import { HeaderModule } from './../core/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
// import { CatalogueComponent } from './catalogue/catalogue.component';



// import { NewArrivalComponent } from './new-arrival/new-arrival.component';


@NgModule({
  declarations: [
    PagesComponent,
    // CatalogueComponent,


  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class PagesModule { }
