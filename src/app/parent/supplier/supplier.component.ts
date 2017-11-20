import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SupplierService } from './supplier.service';
import { Supplier } from './supplier';
import { SupplierPipe } from './supplier.pipe';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SupplierComponent implements OnInit {
  
    //class Supplier
    supplierList: Supplier[];
  
    //after import masukkan ke constructor
    constructor(private SupplierService: SupplierService) { }

    p:number = 1;

    ngOnInit() 
    {
      //template
      //getData dipanggil untuk view list
      var x = this.SupplierService.getData();
      x.snapshotChanges().subscribe(item => 
      {
        this.supplierList = [];
        item.forEach(element => 
        {
          var y = element.payload.toJSON();
          y["$supKey"] = element.key;
          this.supplierList.push(y as Supplier);
        });
      });
    }
  
    onSubmit(form: NgForm) 
    {
      //fungsi insertEmployee dan update
      if (form.value.$supKey == null) //jika primary key tidak ada, bikin baru
      {
        //this.SupplierService.insertSupplier(form.value);
        this.SupplierService.insertSupplier(this.SupplierService.selectedSupplier);
      }
      else //jika primary key ada update existing
      {
        //this.SupplierService.updateSupplier(form.value);
        this.SupplierService.updateSupplier(this.SupplierService.selectedSupplier);
      }
      this.resetForm(form);
    }
  
    resetForm(form?: NgForm) 
    {
      //fungsi reset
      if (form != null)
        form.reset();
      this.SupplierService.selectedSupplier = {
        $supKey: null,
        supName:'',
        supProduct:'',
        supLocation:'',
      }
    }
  
    onDelete(form: NgForm) 
    {
      //fungsi deleteSupplier()
      if (confirm('Are you sure to delete this record ?') == true) {
        this.SupplierService.deleteSupplier(form.value.$supKey);
        this.resetForm(form);
      }
    }
  
    onItemClick(sup : Supplier)
    {
      this.SupplierService.selectedSupplier = Object.assign({}, sup);
    }
  
  }