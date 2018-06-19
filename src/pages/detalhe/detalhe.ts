//Componentes
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SigninPage} from '../signin/signin';
import {AuthService} from '../../providers/auth/auth-service';


//Pages
import { CarrinhoPage } from '../carrinho/carrinho';
import { AdicionarItemPage } from '../adicionar-item/adicionar-item';

//Providers
import { FuncoesProvider } from '../../providers/funcoes/funcoes';

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public Funcoes: FuncoesProvider,
    private authService: AuthService) {
  }

  private produto = this.navParams.get('Produto');

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePage');
    console.log(this.produto);
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


  addCarrinho(x) { // Adiciona um item ao carrinho e exibe um TOAST de confirmação
      this.navCtrl.push(AdicionarItemPage, {Item: x});
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
}
