import { User } from './user';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({});
  constructor(private tokenService: TokenService) {
    if (this.tokenService.hasToken()) {
      this.decodeJWT();
    }
  }

  private decodeJWT(): void {
    const token = this.tokenService.returnToken();
    const user = jwt_decode(token) as User;

    this.userSubject.next(user);
  }

  returnUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  storeUserToken(token: string): void {
    this.tokenService.storeToken(token);
    this.decodeJWT();
  }

  logout(): void {
    this.tokenService.deleteToken();
    this.userSubject.next({});
  }

  isLoggedIn(): boolean {
    return this.tokenService.hasToken();
  }
}
