import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { AnimalComponent } from './animal/animal.component';
import { CardModule } from '../components/card/card.module';
import { GridAnimalsPicturesComponent } from './grid-animals-pictures/grid-animals-pictures.component';

@NgModule({
  declarations: [ListAnimalsComponent, AnimalComponent, GridAnimalsPicturesComponent],
  imports: [CommonModule, AnimalsRoutingModule, CardModule],
})
export class AnimalsModule {}
