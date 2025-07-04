import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(params?: any): Observable<any> {
  return this.http.get<any[]>(`${this.apiUrl}/media`, { params });
}

  // getMediaById(): Observable

  // FILMS
  getMovies(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/media/movies`);
  }
  
  getMovie(id: string, data: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/media/movies/${id}`, data);
  }

  createMovie(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/media/movies`, data);
  }

  updateMovie(id: string, data: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/media/movies/${id}`, data);
  }

  deleteMovie(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/media/movies/${id}`);
  }

  // SERIES
  getSeries(): Observable<any> {
    return this.http.get(`${this.apiUrl}/media/series`);
  }
  getSerie(id: string, data: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/media/series/${id}`, data);
  }

  createSerie(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/series`, data);
  }

  updateSerie(id: number, data: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/media/series/${id}`, data);
  }

  deleteSerie(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/media/series/${id}`);
  }

  // JEU VIDEO
  getVideoGame(): Observable<any> {
    return this.http.get(`${this.apiUrl}/media/videogames`);
  }

  getVideoGames(): Observable<any> {
    return this.http.get(`${this.apiUrl}/media/videogames`);
  }

  createVideoGame(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/media/videogames`, data);
  }

  updateVideoGame(id: number, data: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/media/videogames/${id}`, data);
  }

  deleteVideoGame(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/media/videogames/${id}`);
  }
}
