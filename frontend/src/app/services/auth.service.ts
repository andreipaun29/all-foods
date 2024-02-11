import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (token === userId) {
      return true;
    }
    return false;
  }


  getCurrentUserId(): string | null {
    return localStorage.getItem('userId');
  }

}