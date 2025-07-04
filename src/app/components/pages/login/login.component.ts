import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../layout/navbar.component';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = '';
  password = '';
  loginSuccess = false;
  loginError = false;

  constructor(
    private readonly authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        // Stocke le token et l'utilisateur
        localStorage.setItem('token', response.access_token);
        this.loginSuccess = true;
        this.loginError = false;
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Login error', err);
        this.loginSuccess = false;
        this.loginError = true;
      },
    });
  }

  signup() {
    this.router.navigate(['/signup']);
  }
}
