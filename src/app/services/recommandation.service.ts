import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecommendationService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMediaRecommendations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/recommendation/media`);
  }
}
