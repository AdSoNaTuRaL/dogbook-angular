import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AnimalsService } from './../animals.service';
import { UserService } from './../../authentication/user/user.service';
import { Animals } from './../animals';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
})
export class ListAnimalsComponent implements OnInit {
  animals!: Animals;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.animals = this.activatedRoute.snapshot.data.animals;
    });
  }
}
