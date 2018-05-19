import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the FunctionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FunctionsProvider {

  constructor(public http: HttpClient, public toastCtrl: ToastController) {
    console.log('Hello FunctionsProvider Provider');
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
}
