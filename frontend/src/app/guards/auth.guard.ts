// src/app/guards/auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

      if (state.url === '/home') {
        if (localStorage.getItem('token')) {
          return true;
        }
        this.router.navigate(['/login']);
        return false;
      } else {
        const userId = localStorage.getItem('userId');
        if (!userId) {
          this.router.navigate(['/login']);
          return false;
        }
        if (userId === next.params['id']) {
          return true;
        }
        if (state.url.startsWith('/account')) {
          window.location.href = '/account/' + localStorage.getItem('userId');
          return false;
        }
        if (state.url.startsWith('/order')) {
          window.location.href = '/order/' + localStorage.getItem('userId');
          return false;
        }
        this.router.navigate(['/login']);
        return false;
      }
  }
}
