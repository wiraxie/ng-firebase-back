import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

  transform(items: any, term: any): any {
    if (term === undefined) return items;

    return items.filter(function(Product) {
        return Product.prdName.toLowerCase().includes(term.toLowerCase());
    })
}

}
