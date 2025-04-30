import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  user: { id: number; email: string; username?: string } | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
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
