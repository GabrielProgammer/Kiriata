import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
	public favoritos = ['EOQ', 'ata'];
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  	this.storage.set('favs', this.favoritos).then(res => console.log(res));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }

}
