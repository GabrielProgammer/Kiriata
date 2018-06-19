import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { FuncoesProvider } from '../funcoes/funcoes';

/*
  Generated class for the CarrinhoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarrinhoProvider {

  public carrinho = [];
  public pedidos = [];

  constructor() {
   
  }

//  public carrinho = new Array<any>();

//  public carrinhoVazio():boolean {
 // 	if (this.carrinho.length != 0) 
 // 		return false; 
 // 	else
 // 		return true;
  //}
  public carrinhoVazio():boolean { // Verifica se há itens no carrinho 
    if (this.carrinho.length != 0) 
        return false; 
    else
        return true;
}
}
