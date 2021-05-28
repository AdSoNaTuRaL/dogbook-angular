import { UserExistsService } from './user-exists.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerValidator } from './lower.validator';
import { NewUser } from './new-user';
import { userPasswordEqualsValidator } from './user-password-equals.validator';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userExistsService: UserExistsService
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: [
          '',
          [Validators.required, lowerValidator],
          [this.userExistsService.userAlreadyExists()],
        ],
        password: [''],
      },
      {
        validators: [userPasswordEqualsValidator],
      }
    );
  }

  register(): void {
    const newUser = this.newUserForm.getRawValue() as NewUser;
    console.log(newUser);
  }
}
