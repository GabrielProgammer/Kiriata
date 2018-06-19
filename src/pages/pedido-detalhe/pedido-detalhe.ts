import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SigninPage} from '../signin/signin';
import {AuthService} from '../../providers/auth/auth-service';

/**
 * Generated class for the PedidoDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedido-detalhe',
  templateUrl: 'pedido-detalhe.html',
})
export class PedidoDetalhePage {
	public pedido;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {
  	this.pedido = this.navParams.get('pedidoSelecionado');
  	console.log(this.pedido);
  }

  signOut(){
this.authService.signOut()
.then(() =>{
  this.navCtrl.parent.parent.setRoot(SigninPage);
})
.catch((error) =>{
  console.error(error);
});
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoDetalhePage');
  }

}
