import { Router } from '@angular/router';
import { UserService } from './../../authentication/user/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user$ = this.userService.returnUser();

  constructor(private userService: UserService, private router: Router) {}

  logout(): void {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
