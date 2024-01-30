// account.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ShareService } from 'src/app/services/share.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {

  firstName: string = localStorage.getItem('firstName') || '';
  lastName: string = localStorage.getItem('lastName') || '';
  email: string = localStorage.getItem('email') || '';
  password: string = '';

  location:any  = localStorage.getItem('location');

  picture: string = '../../assets/profile.jpg'
  
  constructor(private router: Router, private shareService: ShareService) {}



  ngOnInit(): void {

    this.shareService.sendData(this.location);


    let pLength = localStorage.getItem('password')?.length;
    this.password = '*'.repeat(pLength || 0);

    if(this.location){
      this.submitted = true;
    }
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
  submitted: boolean = false;

  submitLocation() {
    this.submitted = true;
    localStorage.setItem('location', this.location );
    this.shareService.sendData(this.location);
  }

  
}
