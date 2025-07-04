import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../layout/navbar.component';


@Component({
  selector: 'app-error404',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss'],
})
export class Error404Component {
  constructor(
    private router: Router,
  ) {
     
  };

  redirectToHome() {
    this.router.navigate(['/']);
  }
}
