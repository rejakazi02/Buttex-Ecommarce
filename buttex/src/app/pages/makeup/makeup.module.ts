import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakeupComponent } from './makeup.component';

import { MakeupRoutingModule } from './makeup-routing.module';


@NgModule({
  declarations: [
    MakeupComponent
  ],
  imports: [
    CommonModule,
    MakeupRoutingModule
  ]
})
export class MakeupModule { }
