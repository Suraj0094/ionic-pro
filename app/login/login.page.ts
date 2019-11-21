import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  user = {} ;    //Temp stores data of User
  constructor() { }

  ngOnInit() {
  }

  submit(data){
    let  unique_key;
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
     for (var i = 0; i < 15; i++) {
      unique_key += possible.charAt(Math.floor(Math.random() * possible.length));  
    }
    localStorage.setItem('authentication_key',unique_key);
  }

}
