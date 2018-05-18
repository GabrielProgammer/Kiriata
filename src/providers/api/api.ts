import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilmesPopulares } from '../../models/filmes-populares';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
	private apiKey: string;
  constructor(public http: HttpClient) {
  	this.apiKey = "4e47dbe7f1ea88e915d595fcb76c6170";
    console.log('Hello ApiProvider Provider');
  }

  getFilmesPopular(): any {
  	return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=' + this.apiKey
  	 + "&language=pt-BR&page=1");
  	
  }

  getCategorias(): any {
  	return  this.http.get<FilmesPopulares>('https://api.themoviedb.org/3/genre/movie/list?api_key=' + this.apiKey
  		+"&language=pt-BR");
  }

}
