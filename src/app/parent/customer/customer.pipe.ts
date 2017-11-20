import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customer'
})
export class CustomerPipe implements PipeTransform {

  transform(items: any, term: any): any {
    if (term === undefined) return items;

    return items.filter(function(Customer) {
        return Customer.cstName.toLowerCase().includes(term.toLowerCase());
    })
}

}
