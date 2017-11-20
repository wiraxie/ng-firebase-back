import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'penjualan'
})
export class PenjualanPipe implements PipeTransform {

  transform(items: any, term: any): any {
    if (term === undefined) return items;

    return items.filter(function(Penjualan) {
        return Penjualan.cstName.toLowerCase().includes(term.toLowerCase());
    })
}

}
