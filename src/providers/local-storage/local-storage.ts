import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the LocalStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalStorageProvider {

  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello LocalStorageProvider Provider');
  }

  postFavorito(id) {
    this.storage.set('fav' + id, true);
  }

  deleteFavorito(id) {
    this.storage.set('fav' + id, false); 
  }

  getFavoritos(): any {
    this.storage.keys().then(favs => {console.log(favs); return favs});
  }

}
