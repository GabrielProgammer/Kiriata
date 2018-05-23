import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Filme } from '../../models/filme';
import { FilmeDetalhePage } from '../filme-detalhe/filme-detalhe';

/**
 * Generated class for the PesquisaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pesquisa',
  templateUrl: 'pesquisa.html',
})
export class PesquisaPage {
	 searchQuery: string = '';
  	items = Array();

    constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PesquisaPage');
  }

  getItems(ev: any) {
    // Reset items back to all of the items
        // set val to the value of the searchbar
    let val = ev.target.value;
   	this.api.getPesquisa(val).subscribe(res => {
   		this.items = (res.results);
   	if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
      	console.log(item);
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
   	 console.log(this.items);
});
   	
    // if the value is an empty string don't filter the items
    
  }

  verDetalhe(item) {
    this.navCtrl.push(FilmeDetalhePage, {filmeSelecionado: item});
  }
}
