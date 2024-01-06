import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check if the token exists
    if (token) {
      // You can add more logic here to validate the token if necessary
      return true;
    }
    return false;
  }


  getAuthenticatedUserId(): number {
    const token = localStorage.getItem('token');
    // Check if the token exists
    if (token) {
      // You can add more logic here to validate the token if necessary
      return 1;
    }
    return -1;
  }
  // You can add other methods related to authentication, e.g., getUserInfo, logout, etc.
}