import { Component } from '@angular/core';
import { NavController, ToastController} from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController, LoadingController } from 'ionic-angular';
import { LanchePage } from '../lanche/lanche';
//import {PedidoPage} from '../pedido/pedido';
//import {CadastrapedidoPage} from '../cadastrapedido/cadastrapedido'; 
import 'rxjs/add/operator/map';
import {FuncoesProvider} from '../../providers/funcoes/funcoes';
import {AuthService} from '../../providers/auth/auth-service';
import {SigninPage} from '../signin/signin';
import { SignupPage } from '../signup/signup';
//import { PedidoProvider, Pedido, PedidoList } from '../../providers/pedido/pedido'
import { CarrinhoProvider } from '../../providers/carrinho/carrinho'

import { PedidoDetalhePage } from '../pedido-detalhe/pedido-detalhe';
import { CarrinhoPage } from '../carrinho/carrinho';
@Component({
	selector: 'page-pedidos',
	templateUrl: 'pedidos.html'
})

export class PedidosPage {
	//pedidos = [];
  //pedidos: PedidoList[];
  public pedidos = [];
//load;
constructor(public carProvider: CarrinhoProvider,
  public navCtrl: NavController, private http: Http, 
  public alertCtrl: AlertController, 
  private loader : LoadingController,
  private authService: AuthService,public Funcoes: FuncoesProvider) {
//	constructor(public Funcoes: FuncoesProvider,public navCtrl: NavController, private http: Http, public alertCtrl: AlertController, private loader : LoadingController, private authService: AuthService, private pedidoProvider: PedidoProvider, private toast: ToastController) {
  	
  	//this.load = this.loader.create({
      //content: "Buscando pedidos. Aguarde ...",
  	//});

  	//this.load.present();

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

  	ionViewWillEnter(){
      this.pedidos = this.carProvider.pedidos;
	//	  console.log(this.pedidos);
      //this.obterPedidosAPI();
		//this.pedidos = this.Funcoes.pedido;
    //console.log(this.pedidos);
    //this.pedidoProvider.getAll()
    //.then((result) => {
    //this.pedidos = result;
    //});
    }
    pedidoDetalhe(x) {
      this.navCtrl.push(PedidoDetalhePage, {pedidoSelecionado: x});
    }
    selecionapedidos(x) {
      console.log(x);
      this.navCtrl.push(PedidosPage, { pedidoSelecionado : x } );
    }
    
    carrinhoPage() { // Abre CarrinhoPage com a array carrinho como parametro
      this.navCtrl.push(CarrinhoPage);
  }

  confirmaCompra() { // Exibe um ALERT de confirmação do efetuamento do pedido
      this.Funcoes.confirmaCompra();
  }

  informaMesa() {
       this.Funcoes.informaMesa(); 
  }
  	//selecionapedidos(x) {
   // console.log(x);
   // this.navCtrl.push(PedidoPage, { pedidoSelecionado : x } );
  //}
    //selecionapedidos(x) {
    //console.log(x);
   // this.navCtrl.push(PedidosPage, { pedidoSelecionado : x } );
  //}

  //erroAPI(req) {
      //this.alertCtrl.create({
      //title: 'Falha na conexão',
      //buttons: [{ text: 'Estou ciente' }],
      //subTitle: 'Não foi possível obter a lista de produtos [' + req + ']. Tente mais tarde.'
    //}).present();
   // }

  //	adicionarpedido(){
// console.log('Adicionando pedido ...');
   // this.navCtrl.push(PedidoPage);
  	//} 
    // editaPedido(item: PedidoList) {
    //this.navCtrl.push('CadastrapedidoPage', { key: item.key, pedido: item.pedido });
 // }

  //removePedido(item: PedidoList) {
   // this.pedidoProvider.remove(item.key)
    //  .then(() => {
        // Removendo do array de items
     //   var index = this.pedidos.indexOf(item);
      //  this.pedidos.splice(index, 1);
       // this.toast.create({ message: 'Pedido Removido.', duration: 3000, position: 'botton' }).present();
      //})
 // }
  //	 obterpedidosAPI() {
   // this.http.get('http://localhost:3000/pedidos2')
    //    .map(response => response.json())
     //   .toPromise()
      //  .then(
       //         response => 
        //        {
         //         this.pedidos = response;
          //        console.log(response);
           //       console.log(this.pedidos);
            //      this.load.dismiss();
             //   },
              
            //    err => {
             //     this.load.dismiss(); 
              //    this.alertCtrl.create({
               //       title: 'Falha na conexão!',
                 //     buttons: [{ text: 'Estou ciente' }],
                  //    subTitle: 'Não foi possível obter a lista de pedidos. Tente mais tarde.' 
         //         }).present();
          
                //});
 // }

  	 //AdicionarPedido(){
    //this.navCtrl.push(LanchePage);
  //}

//	erroAPI(req) {
  //	this.alertCtrl.create({
	//		title: 'Falha na conexão',
	//		buttons: [{ text: 'Estou ciente' }],
	//		subTitle: 'Não foi possível obter a lista de produtos [' + req + ']. Tente mais tarde.'
	//	}).present();
  //	}

  //	obterPedidosAPI() {
  	//this.http.get('http://localhost:3000/pedidos') //Dados dos PEDIDOS
	 	//.map(response => response.json())
		//	.toPromise()
		//.then(
		//	response => {
		//		this.pedidos = response;
			//	console.log(response)
			//	},

		// 		err => {
		 	//	this.erroAPI('Pedidos');
			//	}
//			);
  	 //}
}
