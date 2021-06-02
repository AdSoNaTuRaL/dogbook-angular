import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  returnToken(): string {
    return localStorage.getItem(KEY) ?? '';
  }

  storeToken(token: string): void {
    localStorage.setItem(KEY, token);
  }

  deleteToken(): void {
    localStorage.removeItem(KEY);
  }

  hasToken(): boolean {
    return !!this.returnToken();
  }
}
