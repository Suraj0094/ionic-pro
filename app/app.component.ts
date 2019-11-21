import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage'; 

import {Router } from '@angular/router';   
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rootPage;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,public storage:Storage,public router:Router
  ) {
    let mov = [{name:'one',date:'',id:1},{name:'two',date:'',id:2},{name:'three',date:'',id:3}
              ,{name:'four',date:'',id:4},{name:'five',date:'',id:5},{name:'six',date:'',id:6}
              ,{name:'seven',date:'',id:7},{name:'eight',date:'',id:8},{name:'nine',date:'',id:9},
              ,{name:'ten',date:'',id:10}]
    storage.set('list',mov);          
    this.initializeApp();
   }

  initializeApp(){
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
   
    let n = 1;
    if(n == 1){
      // this.router.navigate(['login']);
      this.router.navigateByUrl('/login');
    }else{
      this.router.navigate(['tabs']);
    }
  }
}

