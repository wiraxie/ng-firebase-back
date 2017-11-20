import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'supplier'
})
export class SupplierPipe implements PipeTransform {

  transform(items: any, term: any): any {
    if (term === undefined) return items;

    return items.filter(function(Supplier) {
        return Supplier.supName.toLowerCase().includes(term.toLowerCase());
    })
}
}
