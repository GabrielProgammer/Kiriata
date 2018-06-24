import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { GeneroSelecionadoPage } from '../genero-selecionado/genero-selecionado';

/**
 * Generated class for the GenerosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-generos',
  templateUrl: 'generos.html',
})

export class GenerosPage {
	public generos:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	public api: ApiProvider) {
  	this.api.getGeneros().subscribe(res => { this.generos  = res.genres});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenerosPage');
  }

  verGenero(genero) {
  	this.navCtrl.push(GeneroSelecionadoPage, {generoSelecionado: genero});
  }
}
