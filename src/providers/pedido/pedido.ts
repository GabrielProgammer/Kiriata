//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

/*
  Generated class for the PedidoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PedidoProvider {

  constructor(private storage: Storage, private datepipe: DatePipe) {

  }
public insert(pedido: Pedido) {
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.save(key, pedido);
  }

  public update(key: string, pedido: Pedido) {
    return this.save(key, pedido);
  }
private save(key: string, pedido: Pedido) {
    return this.storage.set(key, pedido);
  }

  public remove(key: string) {
    return this.storage.remove(key);
  }
public getAll() {

    let pedidos: PedidoList[] = [];

    return this.storage.forEach((value: Pedido, key: string, iterationNumber: Number) => {
      let pedido = new PedidoList();
      pedido.key = key;
      pedido.pedido = value;
      pedidos.push(pedido);
    })
      .then(() => {
        return Promise.resolve(pedidos);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}
  export class Pedido {
  Cliente: string;
Mesa: string;
Lanche: string;
Quantidade_Lanche:string;
Preco_Lanche: string;
Bebida: string;
Quantidade_Bebida: string;
Preco_Bebida: string;
  Phone: number;
  Birth: Date;
  active: boolean;
}
export class PedidoList {
  key: string;
  pedido: Pedido;
}