import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(prdName: any, term: any): any 
  {
    if(term === undefined)
    {
      return prdName;
    }

    return prdName.filter(function (Product)
    {
      
      return Product.prdName.toLowerCase().includes(term.toLowerCase());
    })
  }

}


