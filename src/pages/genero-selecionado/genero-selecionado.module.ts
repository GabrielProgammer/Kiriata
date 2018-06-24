import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneroSelecionadoPage } from './genero-selecionado';

@NgModule({
  declarations: [
    GeneroSelecionadoPage,
  ],
  imports: [
    IonicPageModule.forChild(GeneroSelecionadoPage),
  ],
})
export class GeneroSelecionadoPageModule {}
