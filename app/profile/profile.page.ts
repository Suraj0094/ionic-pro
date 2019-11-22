import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user = {};
  constructor(public storage:Storage) { 

  }

  ngOnInit() {
  }


  ionViewWillEnter(){
    this.storage.get('Profile').then(data =>{
       this.user = data;
     }) 
  }

  updateProfile(userData){
    this.storage.set('Profile',userData).then(data =>{
      console.log(data);
      this.user = data;
    }) 
  }

}
