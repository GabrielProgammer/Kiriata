//Componentes
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {SigninPage} from '../signin/signin';
import {AuthService} from '../../providers/auth/auth-service';

//Pages
import { PedidosPage } from '../pedidos/pedidos';
import { CarrinhoPage } from '../carrinho/carrinho';
import { DetalhePage } from '../detalhe/detalhe';
import { AdicionarItemPage } from '../adicionar-item/adicionar-item';

//Providers
import { ApiProvider } from '../../providers/api/api';
import { FuncoesProvider } from '../../providers/funcoes/funcoes';

@Component({
  selector: 'page-bebida',
  templateUrl: 'bebida.html'
})

export class BebidaPage {
  public refrigerante = [];
  public cha = []
  public suco = [];
  private load;
  constructor(public navCtrl: NavController, public api: ApiProvider, public Funcoes: FuncoesProvider,
    private loadCtrl: LoadingController, private authService: AuthService) {
   this.load = this.loadCtrl.create({
     content: 'Obtendo as bebidas...'
   });
   this.load.present();
   this.api.obterProdutosAPI().subscribe((db)  => {
     this.load.dismiss();
     this.refrigerante = db.refrigerantes;
     this.cha = db.cha;
     this.suco = db.suco;
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

  //constructor(public navCtrl: NavController, public api: ApiProvider, public Funcoes: FuncoesProvider) {
   // this.api.obterProdutosAPI().subscribe((db)  => {
    //  this.refrigerante = db.refrigerantes;
     // this.cha = db.cha;
    //  this.suco = db.suco;
    //});
 // }
//export class BebidaPage {
  //constructor(public navCtrl: NavController, public api: ApiProvider, public Funcoes: FuncoesProvider) {

  //}

  //public refrigerante = [];
  //public cha = []
//  public suco = [];

 // ionViewWillEnter(){
   // this.api.obterProdutosAPI().subscribe((db)  => {
   //   this.refrigerante = db.refrigerantes;
    //  this.cha = db.cha;
     // this.suco = db.suco;
   // });
   // console.log(db);
   // } 
    addCarrinho(x) { // Adiciona um item ao carrinho e exibe um TOAST de confirmação
      if (x.versoes.length > 1) {
         this.navCtrl.push(AdicionarItemPage, {Item: x});
      }  else {
        this.Funcoes.compra(x);
      }
    }
    //addCarrinho(x) { // Adiciona um item ao carrinho e exibe um TOAST de confirmação
      //this.navCtrl.push(AdicionarItemPage, {Item: x});
   // }

     verDetalheProd(x) {
      this.navCtrl.push (DetalhePage, {Produto: x});
    }

     carrinhoPage() { // Abre CarrinhoPage com a array carrinho como parametro
      this.navCtrl.push(CarrinhoPage);
    }

    confirmaCompra() { // Exibe um ALERT de confirmação do efetuamento do pedido
      this.Funcoes.confirmaCompra();
    }
}
