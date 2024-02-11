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
    
      // if we are on the /home page, only check if the token exists in local storage.
      // otherwise, if we are on the /account/id page, check if the user id in the url matches the user id in local storage.
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
        // stay on the same page if on account
        if (state.url.startsWith('/account')) {
          window.location.href = '/account/' + localStorage.getItem('userId');
          return false;
        }
        //stay on the same page if on order
        if (state.url.startsWith('/order')) {
          window.location.href = '/order/' + localStorage.getItem('userId');
          return false;
        }
        this.router.navigate(['/login']);
        return false;
      }
  }
}
