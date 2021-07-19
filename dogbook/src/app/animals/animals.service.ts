import { environment } from './../../environments/environment';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Animal, Animals } from './animals';
import { catchError, mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private httpClient: HttpClient) {}

  userList(username: string): Observable<Animals> {
    return this.httpClient.get<Animals>(
      `${environment.apiUrl}/${username}/photos`
    );
  }

  searchById(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(`${environment.apiUrl}/photos/${id}`);
  }

  deleteAnimal(id: number): Observable<Animal> {
    return this.httpClient.delete<Animal>(`${environment.apiUrl}/photos/${id}`);
  }

  like(id: number): Observable<boolean> {
    return this.httpClient
      .post(
        `${environment.apiUrl}/photos/${id}/like`,
        {},
        { observe: 'response' }
      )
      .pipe(
        mapTo(true),
        catchError((error) => {
          return error.status === '304' ? of(false) : throwError(error);
        })
      );
  }

  upload(
    description: string,
    allowComments: boolean,
    file: File
  ): Observable<any> {
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('file', file);

    return this.httpClient.post(
      `${environment.apiUrl}/photos/upload`,
      formData,
      { observe: 'events', reportProgress: true }
    );
  }
}
