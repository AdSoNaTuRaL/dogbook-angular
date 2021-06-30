import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { AnimalComponent } from './animal/animal.component';


@NgModule({
  declarations: [
    ListAnimalsComponent,
    AnimalComponent
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule
  ]
})
export class AnimalsModule { }
