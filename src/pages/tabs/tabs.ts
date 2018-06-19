import { Component } from '@angular/core';

import { PedidosPage } from '../pedidos/pedidos';
import { LanchePage } from '../lanche/lanche';
import { BebidaPage } from '../bebida/bebida';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
 tab1Root = PedidosPage;
  tab2Root = LanchePage;
  tab3Root = BebidaPage;
//  tab1Root = PedidosPage;

  constructor() {

  }
}
