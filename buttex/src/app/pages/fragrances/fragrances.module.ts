import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FragrancesRoutingModule } from './fragrances-routing.module';
import { FragrancesComponent } from './fragrances.component';


@NgModule({
  declarations: [
    FragrancesComponent
  ],
  imports: [
    CommonModule,
    FragrancesRoutingModule
  ]
})
export class FragrancesModule { }
