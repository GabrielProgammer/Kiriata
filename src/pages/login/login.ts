import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BackendlessApiProvider } from '../../providers/backendless-api/backendless-api';
import { HomePage } from '../../pages/home/home';
import { FunctionsProvider } from '../../providers/functions/functions';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	private user = {email: '', password: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public backApi: BackendlessApiProvider, public functions: FunctionsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

	public logar() {
 		this.backApi.login(this.user.email, this.user.password).subscribe(res => {
 			console.log(res);	
 			this.navCtrl.setRoot(HomePage);
 		},
 		Error => {
 			this.functions.showToast('Dados incorretos!');
 		});
  	
  	
  // 	.then(() => {
  // 		this.navCtrl.setRoot(HomePage);
 	// })
 	// .catch( err => {
	 // 	console.log("Erro");
	 // 	this.functions.showToast('Erro');
	 // });
}}
	