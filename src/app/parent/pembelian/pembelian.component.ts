import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PembelianService } from './pembelian.service'; //service
import { Pembelian } from './pembelian'; //class
import { PembelianPipe } from './pembelian.pipe';

@Component({
  selector: 'app-pembelian',
  templateUrl: './pembelian.component.html',
  styleUrls: ['./pembelian.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PembelianComponent implements OnInit {
  
    //class Pembelian
    pembelianList: Pembelian[];
  
    //after import masukkan ke constructor
    constructor(private PembelianService: PembelianService) { }
  
    p:number = 1;

    ngOnInit() 
    {
      //template
      //getData dipanggil untuk view list
      var x = this.PembelianService.getData();
      x.snapshotChanges().subscribe(item => 
      {
        this.pembelianList = [];
        item.forEach(element => 
        {
          var y = element.payload.toJSON();
          y["$beliKey"] = element.key;
          this.pembelianList.push(y as Pembelian);
        });
      });
    }
  
    onSubmit(form: NgForm) 
    {
      //fungsi insertEmployee dan update
      if (form.value.$beliKey == null) //jika primary key tidak ada, bikin baru
      {
        //this.PembelianService.insertPembelian(form.value);
        this.PembelianService.insertPembelian(this.PembelianService.selectedPembelian);
      }
      else //jika primary key ada update existing
      {
        //this.PembelianService.updatePembelian(form.value);
        this.PembelianService.updatePembelian(this.PembelianService.selectedPembelian);
      }
      this.resetForm(form);
    }
  
    resetForm(form?: NgForm) 
    {
      //fungsi reset
      if (form != null)
        form.reset();
      this.PembelianService.selectedPembelian = {
        $beliKey: null,
        supName: '',
        product:'',
      }
    }
  
    onDelete(form: NgForm) 
    {
      //fungsi deletePembelian()
      if (confirm('Are you sure to delete this record ?') == true) {
        this.PembelianService.deletePembelian(form.value.$beliKey);
        this.resetForm(form);
      }
    }
  
    onItemClick(Pembelian : Pembelian)
    {
      this.PembelianService.selectedPembelian = Object.assign({}, Pembelian);
    }
  
  }
  
