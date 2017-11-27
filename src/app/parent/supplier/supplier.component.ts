import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SupplierService } from './supplier.service'; //service
import { AuthService } from '../../auth.service';

import { Supplier } from './supplier'; //class
import { SupplierPipe } from './supplier.pipe';
import { SupSortPipe } from './sup-sort.pipe';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SupplierComponent implements OnInit {
  
    //class Supplier
    //supplierList: Supplier[];
    supplierList: Supplier[] = [];
  
    //after import masukkan ke constructor
    constructor(private SupplierService: SupplierService, private AuthService: AuthService) { }
  
    p:number = 1; //utk page
    isValid:boolean = true;
  
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
        supName: '',
        supProduct:'',
        supLocation:''
      }
    }
  
   onDelete($supKey: string) 
   {
      if (confirm('Are you sure to delete this record ?') == true) {
        this.SupplierService.deleteSupplier($supKey);
      }
   }
  
    onItemClick(prd : Supplier)
    {
      this.SupplierService.selectedSupplier = Object.assign({}, prd);
    }
  
    //sorting//
    isDesc: boolean = false;
    column: string = "prdName";
    records = this.SupplierService.supplierList
    direction: number;
    sort(property){
      this.isDesc = !this.isDesc; //change the direction    
      this.column = property;
      this.direction = this.isDesc ? 1 : -1;
      };
  };
  