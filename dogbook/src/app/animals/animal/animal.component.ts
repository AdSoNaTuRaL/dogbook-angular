import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
})
export class AnimalComponent implements OnInit {
  private urlOriginal = '';

  @Input() description = '';

  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this.urlOriginal = url;
    } else {
      this.urlOriginal = `${environment.apiUrl}/imgs/${url}`;
    }
  }

  get url(): string {
    return this.urlOriginal;
  }

  constructor() {}

  ngOnInit(): void {}
}
