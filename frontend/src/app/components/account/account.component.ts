// account.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {

  constructor(private router: Router) {}

  firstName: string = localStorage.getItem('firstName') || '';
  lastName: string = localStorage.getItem('lastName') || '';
  email: string = localStorage.getItem('email') || '';
  password: string = '';



  picture: string = '../../assets/profile.jpg'

  ngOnInit(): void {

    let pLength = localStorage.getItem('password')?.length;
    this.password = '*'.repeat(pLength || 0);
  }


  logout(){
    this.router.navigate(['/login']);
  }

  home(){
    this.router.navigate(['/home']);
  }


  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
    if(this.showPassword){
      this.password = localStorage.getItem('password') || '';
    }
    else{
      let length = this.password.length;
      this.password = '*'.repeat(length);
    }
  }
  
}
