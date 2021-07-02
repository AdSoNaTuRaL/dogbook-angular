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
  animals$!: Observable<Animals>;

  constructor(
    private userService: UserService,
    private animalsService: AnimalsService
  ) {}

  ngOnInit(): void {
    this.animals$ = this.userService.returnUser().pipe(
      switchMap((user) => {
        const username = user.name ?? '';
        return this.animalsService.userList(username);
      })
    );
  }
}
