import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  authenticate(user: string, password: string): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/user/login`, {
      userName: user,
      password,
    });
  }
}
