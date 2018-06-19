import { Component } from '@angular/core';
import { Platform, Slide } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {AngularFireAuth} from 'angularfire2/auth';

import { TabsPage } from '../pages/tabs/tabs';
import {SlidePage} from '../pages/slide/slide';
import{SigninPage} from '../pages/signin/signin';

import { Storage } from '@ionic/storage';
import { HomeSlidePage } from '../pages/home-slide/home-slide';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SlidePage;
  //rootPage:any;
 constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, afAuth: AngularFireAuth, public storage: Storage) {
//const authObserver = afAuth.authState.subscribe(user => {
///if (user) {
//this.rootPage = HomePage;
//authObserver.unsubscribe();
//} else {
 //this.rootPage = SigninPage;
 //authObserver.unsubscribe();
 //}
 //})
 
  // afAuth.authState.subscribe(user => {
    //  if (user) {
      //  this.rootPage = HomePage;
     // } else {
      //  this.rootPage = SigninPage;
     // }
    //});
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      //storage.get('slideVisto').then((val) => {
       // if (val){
        //  this.rootPage = SigninPage;
     // }
      //  else
         // this.rootPage = HomeSlidePage;
       // });
        });
  }
}
