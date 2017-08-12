import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitals'
})
export class CapitalsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value && typeof value === 'string') {
      return value[0].toUpperCase() + value.slice(1);
    }
    return value;
  }

}
