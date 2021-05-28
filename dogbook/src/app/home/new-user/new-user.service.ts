import { Observable } from 'rxjs';
import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private httpCliente: HttpClient) {}

  registerNewUser(newUser: NewUser): Observable<any> {
    return this.httpCliente.post(`${environment.apiUrl}/user/signup`, newUser);
  }

  userAlreadyExists(username: string): Observable<any> {
    return this.httpCliente.get(`${environment.apiUrl}/user/exists/${username}`);
  }
}
