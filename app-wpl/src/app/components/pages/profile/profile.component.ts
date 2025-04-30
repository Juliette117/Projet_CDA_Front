import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  user: any = null;
  error: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/users/me').subscribe({
      next: (response) => {
        this.user = response;
      },
      error: (err) => {
        console.error('Erreur de récupération du profil', err);
        this.error = 'Erreur lors de la récupération du profil';
      },
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']); // Redirige vers homepage
  }
}