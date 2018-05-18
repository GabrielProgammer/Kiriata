import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { FilmesPopulares } from '../../models/filmes-populares';
import { FilmeDetalhePage } from '../filme-detalhe/filme-detalhe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public generos = {genres: ''};
	public filmesPopular: FilmesPopulares[] = Array();

  constructor(public navCtrl: NavController, public api: ApiProvider) {
  	this.api.getCategorias().subscribe(res => { this.generos = res; console.log(this.generos.genres[0])});
  	this.api.getFilmesPopular().subscribe(res => { this.filmesPopular = res;  
  		console.log(this.filmesPopular)});
  }

  verDetalhe(x) {
  	this.navCtrl.push(FilmeDetalhePage, {filmeSelecionado: x})
  }

}
