import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../layout/navbar.component';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  email = '';
  username = '';
  password = '';
  role?: string;

  signupSuccess = false;
  signupError = false;

  constructor(
    private readonly authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.authService
      .signup(this.email, this.username, this.password, this.role)
      .subscribe({
        next: (response) => {
          console.log('Inscription réussie !', response);
          this.signupSuccess = true;
          this.signupError = false;
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error("Erreur d'inscription :", err);
          this.signupSuccess = false;
          this.signupError = true;
        },
      });
  }
}
