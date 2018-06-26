import { NgModule } from '@angular/core';
import { DinheiroPipe } from './dinheiro/dinheiro';
import { FiltraIdiomaPipe } from './filtra-idioma/filtra-idioma';
import { TempoFilmePipe } from './tempo-filme/tempo-filme';
@NgModule({
	declarations: [DinheiroPipe,
    FiltraIdiomaPipe,
    TempoFilmePipe],
	imports: [],
	exports: [DinheiroPipe,
    FiltraIdiomaPipe,
    TempoFilmePipe]
})
export class PipesModule {}
