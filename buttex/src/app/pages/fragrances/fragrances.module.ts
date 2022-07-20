import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FragrancesRoutingModule } from './fragrances-routing.module';
import { FragrancesComponent } from './fragrances.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    FragrancesComponent
  ],
  imports: [
    CommonModule,
    FragrancesRoutingModule,
    MatExpansionModule,
    MatRadioModule
  ]
})
export class FragrancesModule { }
