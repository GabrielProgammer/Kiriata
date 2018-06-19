//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
//import { LoadingController} from 'ionic-angular';
//Providers
import { FuncoesProvider } from '../funcoes/funcoes';

@Injectable()
export class ApiProvider {
	private apiKey: string = 'https://demo7908592.mockable.io/produtos';
  
	constructor(public http: Http) {
	//, public Funcoes: FuncoesProvider, public load: LoadingController
	// console.log('Hello ApiProvider Provider');
  }

  //public sanduiches = [];
  //public loadLocal;

  //obterProdutosAPI(){
  //	return this.http.get('https://my-json-server.typicode.com/gabrielprogammer/api-fake/db')
  //	.map(res => res.json())

		/*this.http.get('https://my-json-server.typicode.com/gabrielprogammer/api-fake/sanduiche') //Dados dos SANDUÍCHES
	  	.map(response => response.json())
	  	.toPromise()
	  	.then(
	 		response => {
	   			this.sanduiches = response;
	   			console.log(this.sanduiches);
	   			this.loadLocal.dismiss();
			},

			err => {
		  		this.Funcoes.erroAPI('Sanduíches');
		  		this.loadLocal.dismiss();
		  		this.loadLocal.ready = true;
		});

  		this.http.get('https://my-json-server.typicode.com/gabrielprogammer/api-fake/pasteis') //Dados dos PASTEIS
	 		.map(response => response.json())
			.toPromise()
			.then(
				response => {
					this.pasteis = response;
				},

		 		err => {
		 			this.Funcoes.erroAPI('Pastéis');
			});*/
//	}
public obterProdutosAPI(){
	return this.http.get(this.apiKey)
 .map(res => res.json())
}

}
