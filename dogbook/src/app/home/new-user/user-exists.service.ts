import { AbstractControl } from '@angular/forms';
import { NewUserService } from './new-user.service';
import { Injectable } from '@angular/core';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserExistsService {
  constructor(private newUserSerive: NewUserService) {}

  userAlreadyExists(): object | null {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((userName) => this.newUserSerive.userAlreadyExists(userName)),
        map((userExists) => (userExists ? { exists: true } : null)),
        first()
      );
    };
  }
}
