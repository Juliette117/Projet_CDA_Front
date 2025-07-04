import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private accessToken: string | null = null;
  private userRole: string | null = null;

  constructor(private http: HttpClient, private router: Router) {
    this.loadFromStorage();
  }

  // INSCRIPTION
  signup(email: string, username: string, password: string, role?: string): Observable<any> {
    const payload: any = { email, username, password };
    if (role && role.trim()) {
      payload.role = role;
    }

    return this.http.post(`${this.apiUrl}/auth/register`, payload);
  }

  // CONNEXION
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, password }).pipe(
      tap((res: any) => {
        this.accessToken = res.access_token;
        this.userRole = res.user.role;

        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('user_role', res.user.role);
        localStorage.setItem('username', res.user.username);
      })
    );
  }

  // DÉCONNEXION
  logout(): void {
    this.accessToken = null;
    this.userRole = null;
    localStorage.clear();
    this.router.navigate(['/login']);
  }


  // UTILISATEUR CONNECTE
  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }

  getToken(): string | null {
    return this.accessToken || localStorage.getItem('access_token');
  }

  getUserRole(): string | null {
    return this.userRole || localStorage.getItem('user_role');
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  private loadFromStorage(): void {
    this.accessToken = localStorage.getItem('access_token');
    this.userRole = localStorage.getItem('user_role');
  }
}