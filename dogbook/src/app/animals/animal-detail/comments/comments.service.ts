import { environment } from './../../../../environments/environment';
import { Comments } from './comments';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private httpClient: HttpClient) {}

  searchCommentById(id: number): Observable<Comments> {
    return this.httpClient.get<Comments>(
      `${environment.apiUrl}/photos/${id}/comments`
    );
  }

  includeComment(id: number, comment: string): Observable<Comment> {
    return this.httpClient.post<Comment>(
      `${environment.apiUrl}/photos/${id}/comments`,
      { commentText: comment }
    );
  }
}
