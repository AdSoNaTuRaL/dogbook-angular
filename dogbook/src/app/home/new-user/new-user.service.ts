import { Observable } from 'rxjs';
import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private httpCliente: HttpClient) {}

  registerNewUser(newUser: NewUser): Observable<any> {
    return this.httpCliente.post('http://localhost:3000/user/signup', newUser);
  }
}
