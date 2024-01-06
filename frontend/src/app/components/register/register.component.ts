import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

    userService: UserService = new UserService();


  constructor(private router: Router) { }

  signUp() {
    const firstName = (document.getElementById('firstname') as HTMLInputElement).value;
    const lastName = (document.getElementById('lastname') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    let userService = new UserService();
    userService.getAllUsers().subscribe(users => {
      const user: User = {
        id: users.length + 1,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      };

      this.userService.setCurrentUserId(user.id ?? null);
      this.userService.setCurrentUserFirstName(firstName ?? null);
      this.userService.setCurrentUserLastName(lastName ?? null);
      this.userService.setCurrentUserEmail(email);
      this.userService.setCurrentUserPassword(password);
    });
    alert('User added successfully!');

  }


  contact(){
    alert('Contact button clicked!');
  }
}