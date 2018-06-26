import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmeDetalhePage } from './filme-detalhe';
import { DinheiroPipe } from '../../pipes/dinheiro/dinheiro';

@NgModule({
  declarations: [
    FilmeDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(FilmeDetalhePage),
    DinheiroPipe
  ],
})
export class FilmeDetalhePageModule {}
