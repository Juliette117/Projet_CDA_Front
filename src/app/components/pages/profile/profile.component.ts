import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  user: any = null;
  error: string = '';

  private apiUrl = environment.apiUrl;

  constructor(
    private readonly http: HttpClient, 
    private readonly router: Router,
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
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']); // Redirige vers homepage
  }
}
