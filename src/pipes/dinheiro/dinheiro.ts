import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DinheiroPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'dinheiro',
})
export class DinheiroPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number, ...args) {
  	//value.toLocaleString();
    return value.toLocaleString();
  }
}
