import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  email = '';
  username = '';
  password = '';

  signupSuccess = false;
  signupError = false;

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService
      .signup({
        email: this.email,
        username: this.username,
        password: this.password,
      })
      .subscribe({
        next: (response) => {
          console.log('Inscription réussie !', response);
          this.signupSuccess = true;
          this.signupError = false;
          // rediriger vers /login après
        },
        error: (err) => {
          console.error("Erreur d'inscription :", err);
          this.signupSuccess = false;
          this.signupError = true;
        },
      });
  }
}
