import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prdSort',
  pure: false
})
export class PrdSortPipe implements PipeTransform {

    transform(records: any, term?: any): any 
    {
      records = records || [];
      return records.sort(function(a, b)
      {

          if(a[term.property] < b[term.property])
          {
            return -1 * term.direction;
          }
          else if( a[term.property] > b[term.property])
          {
            return 1 * term.direction;
          }
          else
          {
            return 0;
          }
       
      });
    }

} 
