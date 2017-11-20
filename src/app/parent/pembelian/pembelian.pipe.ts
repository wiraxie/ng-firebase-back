import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pembelian'
})
export class PembelianPipe implements PipeTransform {

  transform(items: any, term: any): any {
    if (term === undefined) return items;

    return items.filter(function(Pembelian) {
        return Pembelian.supName.toLowerCase().includes(term.toLowerCase());
    })
}

}
