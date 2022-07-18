import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardOneModule } from './../../shared/lazy-component/product-card-one/product-card-one.module';
import { BannerCardModule } from './../../shared/lazy-component/banner-card/banner-card.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OnlineEditionRoutingModule } from './online-edition-routing.module';
import { OnlineEditionComponent } from './online-edition.component';


@NgModule({
  declarations: [
    OnlineEditionComponent
  ],
  imports: [
    CommonModule,
    OnlineEditionRoutingModule,
    ProductCardOneModule,
    BannerCardModule,
    BrowserAnimationsModule
  ]
})
export class OnlineEditionModule { }
