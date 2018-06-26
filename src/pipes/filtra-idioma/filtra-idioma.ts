import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FiltraIdiomaPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filtraIdioma',
})
export class FiltraIdiomaPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    switch (value) {
    	case "en":
        	return "Inglês";
    	case "pt":
        	return "Português";
      	case "ja":
        	return "Japonês";
      	case "it":
        	return "Italiano";
      	case "id":
        	return "Indonésio";
      	case "ko":
        	return "Coreano";
      	case "es":
        	return "Espanhol";
      	case "sw":
      		return "Suaíli";
     	case "xh":
     		return "Xhosa";
      	default:
        	return value;
    }
  }
}
