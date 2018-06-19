import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PedidoDetalhePage } from '../pages/pedido-detalhe/pedido-detalhe';
import { PedidosPage } from '../pages/pedidos/pedidos';
import { LanchePage } from '../pages/lanche/lanche';
import { BebidaPage } from '../pages/bebida/bebida';
import { TabsPage } from '../pages/tabs/tabs';
//import {CadastrapedidoPage} from '../pages/cadastrapedido/cadastrapedido';
import{PedidoPage} from '../pages/pedido/pedido';
import {CarrinhoPage} from '../pages/carrinho/carrinho';
import {SlidePage} from '../pages/slide/slide';
import { DetalhePage } from '../pages/detalhe/detalhe';
import { AdicionarItemPage } from '../pages/adicionar-item/adicionar-item'
import { EditarPage } from '../pages/editar/editar';
import { HomeSlidePage } from '../pages/home-slide/home-slide';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { SigninPage } from '../pages/signin/signin';
import { SigninWithEmailPage } from '../pages/signinwithemail/signinwithemail';
import { SignupPage } from '../pages/signup/signup';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { AuthService } from '../providers/auth/auth-service';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

import { FuncoesProvider } from '../providers/funcoes/funcoes';
import { CarrinhoProvider } from '../providers/carrinho/carrinho';
import { ApiProvider } from '../providers/api/api';
import { PedidoProvider } from '../providers/pedido/pedido';


import {DatePipe} from '@angular/common';
import { IonicStorageModule } from '@ionic/storage';
import {FiltroPipe} from '../pipes/filtro/filtro';

//se quiser usar outra base de dados, basta trocar esse const por qualquer um que é gerado no firebase, que funciona!!!
const firebaseConfig = {
  apiKey: "AIzaSyCbsZewIaJhoM44lCp39Y4mDnZIqXMs-0E",
  authDomain: "ionic-example1.firebaseapp.com",
  databaseURL: "https://ionic-example1.firebaseio.com",
  projectId: "ionic-example1",
  storageBucket: "ionic-example1.appspot.com",
  messagingSenderId: "386013157964"
};

//var config = {
 // apiKey: "AIzaSyDwq4B6SYbMZPbb6kbIxzopQ7oVZkCkBqU",
  //authDomain: "menu-urgot.firebaseapp.com",
  //databaseURL: "https://menu-urgot.firebaseio.com",
 // projectId: "menu-urgot",
  //storageBucket: "menu-urgot.appspot.com",
  //messagingSenderId: "918004006962"
//};

@NgModule({
  declarations: [
    MyApp,
    PedidosPage,
    LanchePage,
    BebidaPage,
    TabsPage,
//CadastrapedidoPage,
PedidoPage,
CarrinhoPage,
SlidePage,
DetalhePage,
AdicionarItemPage,
SigninPage,
  SigninWithEmailPage,
    SignupPage,
    ResetpasswordPage,
   EditarPage,
   FiltroPipe,
   PedidoDetalhePage,
   HomeSlidePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
     AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
     IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PedidosPage,
    LanchePage,
    BebidaPage,
    TabsPage,
  //  CadastrapedidoPage,
    PedidoPage,
    SlidePage,
    CarrinhoPage,
    DetalhePage,
    AdicionarItemPage,
   SigninPage,
    SigninWithEmailPage,
    SignupPage,
    ResetpasswordPage,
     EditarPage,
     PedidoDetalhePage,
     HomeSlidePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    AngularFireModule,
    AngularFireDatabase,
     FuncoesProvider,
    CarrinhoProvider,
    ApiProvider,
    DatePipe,
    PedidoProvider
  ]
})
export class AppModule {}
