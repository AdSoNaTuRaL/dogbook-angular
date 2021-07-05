import { AnimalsService } from './../animals.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../animals';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
})
export class AnimalDetailComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animalsService: AnimalsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params.animalId;
    this.animal$ = this.animalsService.searchById(this.animalId);
  }

  like(): void {
    this.animalsService.like(this.animalId).subscribe((like) => {
      if (like) {
        this.animal$ = this.animalsService.searchById(this.animalId);
      }
    });
  }

  deleteAnimal(): void {
    this.animalsService.deleteAnimal(this.animalId).subscribe(
      () => {
        this.router.navigate(['/animals/']);
      },
      (error) => console.log(error)
    );
  }
}
