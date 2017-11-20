import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'beliSort'
})
export class BeliSortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
