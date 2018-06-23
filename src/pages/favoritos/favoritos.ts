import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import { ApiProvider } from '../../providers/api/api';

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
	public favoritos = Array();
	private idFavs = new Array();
	private tam;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	public storage: Storage, public storageFunctions: LocalStorageProvider,
  		public api: ApiProvider) {
  		this.idFavs = this.storageFunctions.getFavoritos();
  		this.tam =  this.idFavs.length;
  		this.preencheFavoritos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }

  preencheFavoritos():any {
  	for (let i = 0; i < this.tam; i++) {
  		this.api.getMovie(this.idFavs[i].substring(4)).subscribe(res => {
  			this.favoritos.push(res);
  		});
  	}	
  }

}
