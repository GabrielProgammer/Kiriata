import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filme } from '../../models/filme';
import { Storage } from '@ionic/storage';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
	private apiKey: string;
  constructor(public http: HttpClient, public storage: Storage) {
  	this.apiKey = "4e47dbe7f1ea88e915d595fcb76c6170";
    console.log('Hello ApiProvider Provider');
  }

  getFilmesPopular(): any {
  	return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=' + this.apiKey
  	 + "&language=pt-BR&page=1");
  	
  }

  getCategorias(): any {
  	return  this.http.get<Filme>('htps://api.themoviedb.org/3/genre/movie/list?api_key=' + this.apiKey
  		+"&language=pt-BR");
  }

  getPesquisa(termo): any {
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.apiKey +
      '&language=pt-BR&query=' + termo +'&page=1&include_adult=true');
  }

  getMovie(id): any {
     return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + this.apiKey +
      '&language=pt-BR');
  }

  getDiscoverMovie(genero, page?):any {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=' + this.apiKey +
    '&language=pt-br&sort_by=popularity.desc&include_adult=false&include_video=false&page='+ page +'&with_genres='
    + genero);
  }

  getGeneros() {
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=' + this.apiKey + 
      '&language=pt-br');
  }
}
