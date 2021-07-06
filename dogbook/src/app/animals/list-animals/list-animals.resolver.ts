import { switchMap, take } from 'rxjs/operators';
import { UserService } from './../../authentication/user/user.service';
import { AnimalsService } from './../animals.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Animals } from '../animals';

@Injectable({
  providedIn: 'root',
})
export class ListAnimalsResolver implements Resolve<Animals> {
  constructor(
    private animalsService: AnimalsService,
    private userService: UserService
  ) {}

  resolve(): Observable<Animals> {
    return this.userService.returnUser().pipe(
      switchMap((user) => {
        const userName = user.name ?? '';
        return this.animalsService.userList(userName);
      }),
      take(1)
    );
  }
}
