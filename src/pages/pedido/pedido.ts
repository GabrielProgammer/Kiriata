import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';
import { PedidoProvider, Pedido } from '../../providers/pedido/pedido'
import { Http } from '@angular/http';
import {SigninPage} from '../signin/signin';
import {AuthService} from '../../providers/auth/auth-service';

/**
 * Generated class for the PedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {
//public pedidos;
model : Pedido;
key : string

  constructor(public navCtrl: NavController, public navParams: NavParams, private http : Http,
   private pedidoProvider: PedidoProvider, private toast: ToastController, private authService: AuthService) {
  //this.pedidos = navParams.get ('pedidoSelecionado');
   if (this.navParams.data.pedido && this.navParams.data.key) {
      this.model = this.navParams.data.pedido;
      this.key =  this.navParams.data.key;
    } else {
      this.model = new Pedido();
    }
  }
save() {
    this.savePedido()
      .then(() => {
        this.toast.create({ message: 'Pedido Salvo.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar o Pedido.', duration: 3000, position: 'botton' }).present();
      });
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

  private savePedido() {
    if (this.key) {
      return this.pedidoProvider.update(this.key, this.model);
    } else {
      return this.pedidoProvider.insert(this.model);
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoPage');
  }

}
