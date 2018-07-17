import { Injectable } from '@angular/core';
import { FunctionsProvider } from '../functions/functions';
import { Http, Headers, RequestOptions } from '@angular/http';

/*
  Generated class for the BackendlessApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BackendlessApiProvider {
  constructor(private functions: FunctionsProvider, public http: Http) {
 //  var APP_ID = 'D1EADC75-4507-6B25-FFB7-77CF054A3100';
	// var API_KEY = '87805C18-74C0-576D-FF05-6496EB76F300';
	// Backendless.initApp(APP_ID, API_KEY);
}
  public login(email: string, password: string): any {
  	var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let body = {
    	login: email,
    	password: password
    }
  	return this.http.post('https://api.backendless.com/D1EADC75-4507-6B25-FFB7-77CF054A3100/906E8089-90DF-787A-FFA4-21D2B9008200/users/login',
  		body, options);
	}
}
