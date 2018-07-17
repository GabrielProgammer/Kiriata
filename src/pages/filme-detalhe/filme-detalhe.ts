import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FunctionsProvider } from '../../providers/functions/functions';
import { ApiProvider } from '../../providers/api/api';
import { Filme } from '../../models/filme';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import { DinheiroPipe } from '../../pipes/dinheiro/dinheiro';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

/**
 * Generated class for the FilmeDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhe',
  templateUrl: 'filme-detalhe.html'
})
export class FilmeDetalhePage {
	public filme: Filme = new Filme();
	public favorito;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	             public storage: Storage, public functions: FunctionsProvider,
                public api: ApiProvider, public storageFunctions: LocalStorageProvider,
                private youtube: YoutubeVideoPlayer) {
    console.log(this.filme);
    this.api.getMovie(this.navParams.get('filmeSelecionado')).subscribe(res => { 
      this.filme = res;
      this.api.getVideos(this.navParams.get('filmeSelecionado')).subscribe(res => { 
      this.filme.videos = res;
       console.log(this.filme);
    });

        this.storage.get('fav'+this.filme.id).then((result) => this.favorito = result);
      if (!this.filme.release_date.mes)
        this.filme.release_date = this.functions.filtraData(this.filme.release_date);
        //this.filme.original_language = this.functions.filtraIdioma(this.filme.original_language);
  });
    
    
  	
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad FilmeDetalhePage');
  }

  openVideo(videoId) {
    this.youtube.openVideo(videoId);
  }
  addFavorito() {
  	  this.storageFunctions.postFavorito(this.filme.id);
      this.favorito = true;
  		this.functions.showToast('Adicionado aos favoritos!');
  }

  remFavorito() {
  	this.storageFunctions.deleteFavorito(this.filme.id);
    this.favorito = false;
  	this.functions.showToast('Removido dos favoritos!');
  }
}
