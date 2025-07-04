import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRoles = route.data['roles'] as string[]; // ex: ['admin']
    const userRole = this.authService.getUserRole(); // depuis localStorage ou mémoire

    if (!userRole || !expectedRoles.includes(userRole)) {
      this.router.navigate(['/403']);
      return false;
    }

    return true;
  }
}