import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaService } from '../../../services/media.service';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../layout/navbar.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  user: any = null;
  error: string = '';

  medias: any[] = [];
  movies: any[] = [];
  series: any[] = [];
  videoGames: any[] = [];

  private apiUrl = environment.apiUrl;

  constructor(
    private readonly mediaService: MediaService,
    private readonly router: Router,
    private readonly http: HttpClient
  ) {}

  ngOnInit() {
    this.http.get(`${this.apiUrl}/users/me`).subscribe({ 
      next: (response) => {
        this.user = response;
      },
      error: (err) => {
        console.error('Erreur de récupération du profil', err);
        this.error = 'Erreur lors de la récupération du profil';
      },
    });
    this.mediaService
      .getAll()
      .subscribe((data) => (this.medias = data.slice(0, 10)));
    
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));

        // Vérifie si token expiré
        const now = Math.floor(Date.now() / 1000);
        if (payload.exp && payload.exp < now) {
          console.warn('Token expiré');
          localStorage.removeItem('token');
          this.user = null;
          return;
        }

        this.user = {
          id: payload.sub,
          email: payload.email,
          username: payload.username,
        };
      } catch (error) {
        console.error('Token invalide ou expiré');
        this.user = null;
        localStorage.removeItem('token');
      }
    };
    this.loadMovies();
    this.loadSeries();
    this.loadVideoGames();
  }

  loadMovies() {
    this.mediaService.getMovies().subscribe((data) => {
      this.movies = data;
    });
  }

   loadSeries() {
    this.mediaService.getSeries().subscribe((data) => {
      this.series = data;
    });
  }

   loadVideoGames() {
    this.mediaService.getVideoGames().subscribe((data) => {
      this.videoGames = data;
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.user = null;
    this.router.navigate(['/']);
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  navigateToMovies(): void {
    this.router.navigate(['/movies'])
  }

  navigateToSeries(): void {
    this.router.navigate(['/series'])
  }

  navigateToGames(): void {
    this.router.navigate(['/videogames'])
  }
}
