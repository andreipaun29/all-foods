import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userService: UserService = new UserService();

  constructor(private elementRef: ElementRef, private router: Router,) {
    
   }


   ngOnInit(): void {
       // clear local storage
        localStorage.clear();
   }


  sendLogin() {

  let users: User[];

  this.userService.getAllUsers().subscribe((data: User[]) => {
    users = data;

    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    let found = false;
    users.forEach((user: { email: string; password: string; }) => {
      if (user.email === email && user.password === password) {
        found = true;
        return;
      }
    });
    if (found) {
      const userId = users.find((user) => user.email === email && user.password === password)?.id;
      const firstName = users.find((user) => user.email === email && user.password === password)?.firstName;
      const lastName = users.find((user) => user.email === email && user.password === password)?.lastName;

      this.userService.setCurrentUserId(userId ?? null);
      this.userService.setCurrentUserFirstName(firstName ?? null);
      this.userService.setCurrentUserLastName(lastName ?? null);
      this.userService.setCurrentUserEmail(email);
      this.userService.setCurrentUserPassword(password);

      localStorage.setItem('userId', String(userId)); // Convert userId to string
      localStorage.setItem('firstName', firstName ?? '');
      localStorage.setItem('lastName', lastName ?? '');
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);

      localStorage.setItem('token', String(userId)); // Convert userId to string


      this.router.navigate(['home']);


    } else {
      alert('Invalid email or password!');
    }
  });

  
  }


  sendRegister() {
    // take the user to the register page
    this.router.navigate(['register']);
  }

  contact() {
    console.log(this.userService.currentUserFirstName);
    
  }

}
