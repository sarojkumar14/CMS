
import { Component } from '@angular/core';
declare let $: any;

import { Login } from '../_models/index';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private login: Login;
  constructor(private router: Router) {
    this.login = new Login;
  }

onLogin(){
  if(this.login.username=='saroj' && this.login.password=='123'){
    localStorage.setItem('currentUser', JSON.stringify(this.login));
    this.router.navigate(['./main/dashboard']);
  }
  else{
    localStorage.setItem('currentUser', null);
    alert('user name and password wrong.');
  }
 
}

}
