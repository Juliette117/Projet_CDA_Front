import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = '';
  password = '';
  loginSuccess = false;
  loginError = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService
      .login({ email: this.email, password: this.password })
      .subscribe({
        next: (response) => {
          console.log('Login successful!', response);
          // Stocke le token et l'utilisateur
          localStorage.setItem('token', response.access_token);

          this.loginSuccess = true;
          this.loginError = false;
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
