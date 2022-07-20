import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakeupComponent } from './makeup.component';

import { MakeupRoutingModule } from './makeup-routing.module';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    MakeupComponent
  ],
  imports: [
    CommonModule,
    MakeupRoutingModule,
    MatExpansionModule,
    MatRadioModule
  ]
})
export class MakeupModule { }
