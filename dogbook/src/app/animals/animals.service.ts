import { TokenService } from './../authentication/token.service';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animals } from './animals';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  userList(username: string): Observable<Animals> {
    const token = this.tokenService.returnToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.httpClient.get<Animals>(
      `${environment.apiUrl}/${username}/photos`,
      { headers }
    );
  }
}
