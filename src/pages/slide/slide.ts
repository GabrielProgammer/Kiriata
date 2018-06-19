import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {SigninPage } from '../signin/signin';
//import {HomePage} from '../home/home';
//import { Storage } from '@ionic/storage';

/**
 * Generated class for the SlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidePage');
  }
  //goToTabsPage(){
   //   this.navCtrl.push(TabsPage)
  //}
  //goToSigninPage(){
  //this.navCtrl.push(SigninPage)
  //}
  irAplicativo() {
  	//this.storage.set('slideVisto', true);
  	this.navCtrl.push(SigninPage);
  }
}
