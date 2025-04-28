import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        console.log('Token reçu:', res.access_token);
        localStorage.setItem('token', res.access_token);
      },
      error: (err) => console.error('Erreur login', err)
    });
  }
}