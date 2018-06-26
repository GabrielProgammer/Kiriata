import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TempoFilmePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'tempoFilme',
})
export class TempoFilmePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number, ...args) {
  	if (value == 0)
  		return "-";
  	else if (value < 60)
  		return value + "m";
  	else {
	  	var horas: number = value / 60;
	  	var minutos: number = value % 60;
	  	return horas.toFixed(0) + "h " + minutos + "m";
	}
  }
}
