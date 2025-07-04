import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaService } from '../../../services/media.service';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  user: any = null;
  error: string = '';

  private apiUrl = environment.apiUrl;

  constructor(
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
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.user = null;
    this.router.navigate(['/']);
  }

  login(): void {
    this.router.navigate(['/login']);
  }
}
