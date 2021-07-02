import { Animals } from './../animals';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-animals-pictures',
  templateUrl: './grid-animals-pictures.component.html',
})
export class GridAnimalsPicturesComponent implements OnInit {
  @Input() animals!: Animals;
  constructor() {}

  ngOnInit(): void {}
}
