import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PenjualanService } from './penjualan.service'; //service
import { Penjualan } from './penjualan'; //class
import { PenjualanPipe } from  './penjualan.pipe';
import { JualSortPipe } from './jual-sort.pipe';

@Component({
  selector: 'app-penjualan',
  templateUrl: './penjualan.component.html',
  styleUrls: ['./penjualan.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PenjualanComponent implements OnInit {
  
    //class Penjualan
    //penjualanList: Penjualan[];
    penjualanList: Penjualan[] = [];
  
    //after import masukkan ke constructor
    constructor(private PenjualanService: PenjualanService) { }
  
    p:number = 1; //utk page
    isValid:boolean = true;
  
    ngOnInit() 
    {
      //template
      //getData dipanggil untuk view list
      var x = this.PenjualanService.getData();
      x.snapshotChanges().subscribe(item => 
      {
        this.penjualanList = [];
        item.forEach(element => 
        {
          var y = element.payload.toJSON();
          y["$jualKey"] = element.key;
          this.penjualanList.push(y as Penjualan);
        });
      });
    }
  
    onSubmit(form: NgForm) 
    {
      //fungsi insertEmployee dan update
      if (form.value.$jualKey == null) //jika primary key tidak ada, bikin baru
      {
        //this.PenjualanService.insertPenjualan(form.value);
        this.PenjualanService.insertPenjualan(this.PenjualanService.selectedPenjualan);
      }
      else //jika primary key ada update existing
      {
        //this.PenjualanService.updatePenjualan(form.value);
        this.PenjualanService.updatePenjualan(this.PenjualanService.selectedPenjualan);
      }
      this.resetForm(form);
    }
  
    resetForm(form?: NgForm) 
    {
      //fungsi reset
      if (form != null)
        form.reset();
      this.PenjualanService.selectedPenjualan = {
        $jualKey: null,
        cstId: '',
        cstName:'',
        product:''
      }
    }
  
   onDelete($jualKey: string) 
   {
      if (confirm('Are you sure to delete this record ?') == true) {
        this.PenjualanService.deletePenjualan($jualKey);
      }
   }
  
    onItemClick(prd : Penjualan)
    {
      this.PenjualanService.selectedPenjualan = Object.assign({}, prd);
    }
  
    //sorting//
    isDesc: boolean = false;
    column: string = "prdName";
    records = this.PenjualanService.penjualanList
    direction: number;
    sort(property){
      this.isDesc = !this.isDesc; //change the direction    
      this.column = property;
      this.direction = this.isDesc ? 1 : -1;
      };
  };
  
