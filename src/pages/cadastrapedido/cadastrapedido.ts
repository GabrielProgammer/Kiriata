import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PedidoProvider, Pedido } from '../../providers/pedido/pedido'
import { PedidosPage } from '../pedidos/pedidos';
import { Http, RequestOptions, Headers } from '@angular/http';

/**
 * Generated class for the CadastrapedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrapedido',
  templateUrl: 'cadastrapedido.html',
})
export class CadastrapedidoPage {

//pedidos ={
//liente: '',
//Mesa :'',
//	Bebida:'',
//	Qtd_Bebida: '',
//	Lanche:'',
//	Qtd_Lanche:''
//};
model : Pedido;
key : string


  constructor(public navCtrl: NavController, public navParams: NavParams, private http : Http, private pedidoProvider: PedidoProvider, private toast: ToastController) {
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

  private savePedido() {
    if (this.key) {
      return this.pedidoProvider.update(this.key, this.model);
    } else {
      return this.pedidoProvider.insert(this.model);
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrapedidoPage');
  }

//cadastrarpedido(){
//	console.log("cadastrando pedido: " + this.pedidos.Cliente);
 // console.log("cadastrando pedido: " + this.pedidos.Mesa);
  //console.log("cadastrando pedido: " + this.pedidos.Bebida);
   // console.log("cadastrando pedido: " + this.pedidos.Qtd_Bebida);
    //console.log("cadastrando pedido: " + this.pedidos.Lanche);
    //console.log("cadastrando pedido: " + this.pedidos.Qtd_Lanche);

//let body = JSON.stringify(this.pedidos);
 //   let headers = new Headers({'Content-Type': 'application/json'});
  //  let options = new RequestOptions({ headers: headers });

//    this.http.post('http://localhost:3000/pedidos2', body, options)
 //       .map(res => res.json())
  //      .toPromise()
   //     .then(response => {
     //                       console.log(response);
      //                      this.navCtrl.pop();
       //                   }
   //     );
    
    
  //}

}
