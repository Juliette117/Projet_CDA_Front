import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../layout/navbar.component';

@Component({
  selector: 'app-error403',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './error403.component.html',
  styleUrls: ['./error403.component.scss'],
})
export class Error403Component {
  constructor(private router: Router) {}

  redirectToHome() {
    this.router.navigate(['/']);
  }
}
