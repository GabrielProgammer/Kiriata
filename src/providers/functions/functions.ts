import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the FunctionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FunctionsProvider {
  public favoritos;
  public qtdFavs: number;
  constructor(public http: HttpClient, public toastCtrl: ToastController, public storage: Storage) {
    console.log('Hello FunctionsProvider Provider');
    this.storage.keys().then(res => console.log(res));
  }

   showToast(message) {
    let toast = this.toastCtrl.create({
        message: message,
        duration: 1500,
        position: 'bottom',
        cssClass: 'toast'
    });
    toast.present(toast);
  }

  getFavoritos() {
  //  for (let i = 0; i < this.qtdFavs; i++) {
  //    this.storage.get('favorito' + this.favoritos[i]).then(res => this.favoritos = res);
  //  } 
  }

  filtraData(data) {
    let dataFormatada = {ano: '', mes: '', dia: ''};

    dataFormatada.ano = data.substring(0,4);
    dataFormatada.mes = data.substring(5,7);
    dataFormatada.dia = data.substring(9,10);

    switch (dataFormatada.mes) {
      case "01":
        dataFormatada.mes = "Jan";
        break;
      case "02":
        dataFormatada.mes = "Fev";
        break;
      case "03":
        dataFormatada.mes = "Mar";
        break;
      case "04":
        dataFormatada.mes = "Abr";
        break;
      case "05": 
        dataFormatada.mes = "Mai";
        break;
      case "06":
        dataFormatada.mes = "Jun";
        break;
      case "07":
        dataFormatada.mes = "Jul";
        break;
      case "08":
        dataFormatada.mes = "Ago";
        break;
      case "09":
        dataFormatada.mes = "Set";
        break;
      case "10":
        dataFormatada.mes = "Out";
         break;
      case "11":
        dataFormatada.mes = "Nov";
          break;
      case "12":
        dataFormatada.mes = "Dez";
        break;
   }
    return dataFormatada;
  }
}
