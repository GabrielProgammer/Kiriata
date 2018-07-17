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
  }

  getFilmesPopular(): any { //Pega os filmes mais populares do dia
  	return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=' + this.apiKey
  	 + "&language=pt-BR&page=1");
  }

  getCategorias(): any { //Pega todos os gêneros
  	return  this.http.get<Filme>('htps://api.themoviedb.org/3/genre/movie/list?api_key=' + this.apiKey
  		+ "&language=pt-BR");
  }

  getPesquisa(termo): any { //Faz uma pesquisa baseado no termo inserido
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.apiKey +
      '&language=pt-BR&query=' + termo +'&page=1&include_adult=true');
  }

  getMovie(id): any { //Pega as informações do filme informado
     return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + this.apiKey +
      '&language=pt-BR');
  }

  /*
    PARAM listadoPor = Allowed Values: , popularity.asc, popularity.desc, release_date.asc, release_date.desc, revenue.asc, 
    revenue.desc, primary_release_date.asc, primary_release_date.desc, original_title.asc, original_title.desc, 
    vote_average.asc, vote_average.desc, vote_count.asc, vote_count.desc, DEFAULT: popularity.desc
  */
  getDiscoverMovie(genero, page?, listadoPor?):any { //Lista os filmes do gênero informado 
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=' + this.apiKey +
      '&language=pt-br&sort_by=' + listadoPor + '&include_adult=false&include_video=false&page='+ page +'&with_genres='
      + genero);
  }

  getGeneros() { //Lista todos os gêneros 
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=' + this.apiKey + 
      '&language=pt-br');
  }

  getVideos(id):any {
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + 
      '/videos?api_key=' + this.apiKey + '&language=pt-br');
  }
}
