import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortdown'
})
export class SortdownPipe implements PipeTransform {

  transform(value: any, args?: any): any {
	console.log("Begin Sort transform")
    let arrObjects = value;
	console.log("arrObjects: ",arrObjects);
    let column = args;
	console.log("column : ",column);

    return arrObjects.sort((a, b) => {
      let result = 0;
		console.log(a);
		console.log(column);
      if(a[column] > b[column]) 
        result = 1;
      else if(a[column] < b[column]) 
        result = -1;
		console.log(result);
      return result;
    });
  }
}