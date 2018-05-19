import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FunctionsProvider } from '../../providers/functions/functions';

/**
 * Generated class for the FilmeDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhe',
  templateUrl: 'filme-detalhe.html',
})
export class FilmeDetalhePage {
	public filme;
	public favorito;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	public storage: Storage, public functions: FunctionsProvider) {
  	this.filme = this.navParams.get('filmeSelecionado');
  	this.storage.get('favorito'+this.filme.title).then((result) => this.favorito = result);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmeDetalhePage');
  }

  addFavorito() {
  	this.storage.set('favorito' + this.filme.title, true).then((result) => {
  		this.favorito = result;
  		console.log(this.favorito);
  		//this.functions.getFavoritos();
  		this.functions.showToast('Adicionado aos favoritos!');
  	});
  }

  remFavorito() {
  	this.storage.set('favorito' + this.filme.title, false).then((result) => {
  		this.favorito = result;
  		console.log(this.favorito);
  		//this.acProvider.getFavoritos();
  		this.functions.showToast('Removido dos favoritos!');
  	});
  }

}
