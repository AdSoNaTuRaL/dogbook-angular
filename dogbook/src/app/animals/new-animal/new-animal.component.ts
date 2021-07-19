import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
import { AnimalsService } from './../animals.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
})
export class NewAnimalComponent implements OnInit {
  animalForm!: FormGroup;
  file!: File;
  preview!: string;
  percentage = 0;

  constructor(
    private animalService: AnimalsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  upload(): void {
    const allowComments = this.animalForm.get('allowComments')?.value ?? false;
    const description = this.animalForm.get('description')?.value ?? '';

    this.animalService
      .upload(description, allowComments, this.file)
      .pipe(finalize(() => this.router.navigate(['animals'])))
      .subscribe(
        (event: HttpEvent<any>) => {
          if (event.type === HttpEventType.UploadProgress) {
            const total = event.total ?? 1;
            this.percentage = Math.round(100 * (event.loaded / total));
          }
        },
        (error) => console.log(error)
      );
  }

  storeFile(image: any): void {
    const [file] = image?.files;
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.preview = event.target.result;
    };
    reader.readAsDataURL(file);
  }
}
