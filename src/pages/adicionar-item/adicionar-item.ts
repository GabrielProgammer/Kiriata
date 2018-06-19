//Components
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {SigninPage} from '../signin/signin';
import {AuthService} from '../../providers/auth/auth-service';

//Pages
import { CarrinhoPage } from '../carrinho/carrinho';

//Providers
import { CarrinhoProvider } from '../../providers/carrinho/carrinho';
import {FuncoesProvider} from '../../providers/funcoes/funcoes';

@IonicPage()
@Component({
	selector: 'page-adicionar-item',
  	templateUrl: 'adicionar-item.html',
})

export class AdicionarItemPage {
	constructor(public carProvider: CarrinhoProvider, public Funcoes: FuncoesProvider,
				public navCtrl: NavController, public navParams: NavParams, 
				private alertCtrl: AlertController, private authService: AuthService) {
  }
	
	private Item = this.navParams.get('Item');

  	ionViewDidLoad() {
		console.log('ionViewDidLoad AdicionarItemPage');
  	}
	  compra(version) {
		this.Funcoes.compra(this.Item, version);
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

  //	compra(version) {
		//let prompt = this.alertCtrl.create({
	  	//	title: this.Item.nome,
	  	//	message: "Quantas Unidades? [" + version.peso + "]",
	  	//	inputs: [{
			  //	name: 'qtd',
			  	//placeholder: 'Vão ser...',
			  //	type: 'number'
			// }],
		  //	buttons: [{
			//  	text: 'Cancelar'
			//},
			//{
			  	//text: 'Salvar',
		  		//handler: data => {
				//	if (data.qtd != '') {
				//		this.Item.qtd = data.qtd;
				//		this.Item.versao = version;
			 	//		this.carProvider.carrinho.push(this.Item); 
			 	//		this.Funcoes.showToast('bottom', this.Item.nome + ' foi adicionado ao seu carrinho!');  
				//	} else {
			  	//		this.Funcoes.showToast('bottom', 'O campo quantidade tem que ser preenchido');
			  //			this.compra(version);
			//		}    
		  //		}
		//	}]
		//});
	//	prompt.present();
  //	}
  	
  	 carrinhoPage() { // Abre CarrinhoPage com a array carrinho como parametro
      this.navCtrl.push(CarrinhoPage);
    }

    confirmaCompra() { // Exibe um ALERT de confirmação do efetuamento do pedido
  		this.Funcoes.confirmaCompra();
  	}
}
