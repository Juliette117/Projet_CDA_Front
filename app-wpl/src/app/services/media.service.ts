import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/medias/movies`);
  }

  getSeries(): Observable<any> {
    return this.http.get(`${this.apiUrl}/medias/series`);
  }

  getVideoGames(): Observable<any> {
    return this.http.get(`${this.apiUrl}/medias/videogames`);
  }
}