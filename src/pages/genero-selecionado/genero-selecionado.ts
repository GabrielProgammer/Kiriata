import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the GeneroSelecionadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-genero-selecionado',
  templateUrl: 'genero-selecionado.html',
})
export class GeneroSelecionadoPage {
	public filmes;
	private genero;
	private totalPages;
	private pages = [1, 2, 3, 4, 5, 6];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	public api: ApiProvider) {
  	this.genero = this.navParams.get('generoSelecionado');

  	this.api.getDiscoverMovie(this.genero.id, 1).subscribe(res => {
  		this.filmes = res.results;
  		this.totalPages = res.total_pages;
  		console.log(this.filmes);
  	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneroSelecionadoPage');
  }

  proxPage(numPage) {
  	this.api.getDiscoverMovie(this.genero.id, numPage).subscribe(res => {
  		this.filmes = res.results;
  		console.log(this.filmes);
  	});
  }

}
