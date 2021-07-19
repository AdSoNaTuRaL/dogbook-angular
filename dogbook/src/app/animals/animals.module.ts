import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from './../components/message/message.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { AnimalComponent } from './animal/animal.component';
import { CardModule } from '../components/card/card.module';
import { GridAnimalsPicturesComponent } from './grid-animals-pictures/grid-animals-pictures.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { CommentsComponent } from './animal-detail/comments/comments.component';
import { NewAnimalComponent } from './new-animal/new-animal.component';

@NgModule({
  declarations: [
    ListAnimalsComponent,
    AnimalComponent,
    GridAnimalsPicturesComponent,
    AnimalDetailComponent,
    CommentsComponent,
    NewAnimalComponent,
  ],
  imports: [CommonModule, AnimalsRoutingModule, CardModule, SharedModule],
})
export class AnimalsModule {}
