// account.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  userId: number = 0;

  constructor(private route: ActivatedRoute, private authService: AuthService) {}

  ngOnInit(): void {

    //log the url
    if (this.route.snapshot.url[1].path != localStorage.getItem('userId')) {
      alert('You are not authorized to view this page');
      //stay on the same page
      window.location.href = '/account/' + localStorage.getItem('userId');
    }


    this.route.params.subscribe((params) => {
      this.userId = +params['id']; // Convert the parameter to a number

      // Check if the authenticated user matches the requested user ID
      if (this.authService.getAuthenticatedUserId() !== this.userId) {
        // Redirect to an error page or handle unauthorized access
        // Example: this.router.navigate(['/unauthorized']);
      }
    });
  }
}
