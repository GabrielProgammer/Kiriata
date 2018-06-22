//Módulos
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//Providers
import { ApiProvider } from '../../providers/api/api';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
//Models
import { Filme } from '../../models/filme';
//Pages
import { FilmeDetalhePage } from '../filme-detalhe/filme-detalhe';
import { FavoritosPage }  from '../favoritos/favoritos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public filmesPopular: Filme[] = Array();

  constructor(public navCtrl: NavController, public api: ApiProvider,
      public storageFunctions: LocalStorageProvider) {
  	this.api.getFilmesPopular().subscribe(res => { 
      this.filmesPopular = res.results;  
  	});
    console.log(this.storageFunctions.getFavoritos());
  }

  verDetalhe(x) {
  	this.navCtrl.push(FilmeDetalhePage, {filmeSelecionado: x.id})
  }

  favoritosPage() {
    this.navCtrl.push(FavoritosPage);
  }
}
