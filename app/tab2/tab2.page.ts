import { Component } from '@angular/core';
import { Storage } from '@ionic/storage'; 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  bookmarkedList = []; 
  constructor(public storage:Storage) {

    
  }

  ionViewWillEnter(){
     this.storage.get('bookmarkedList').then(data =>{
        this.bookmarkedList = data;
        console.log(this.bookmarkedList);
     })   
  }

}
