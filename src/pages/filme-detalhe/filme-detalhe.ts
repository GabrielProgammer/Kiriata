import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.filme = this.navParams.get('filmeSelecionado');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmeDetalhePage');
  }

}
