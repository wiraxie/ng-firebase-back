import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CustomerService } from './customer.service'; //service
import { Customer } from './customer'; //class
import { CustomerPipe } from './customer.pipe';
import { CstSortPipe } from './cst-sort.pipe';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerComponent implements OnInit {
  
    //class Customer
    //customerList: Customer[];
    customerList: Customer[] = [];
  
    //after import masukkan ke constructor
    constructor(private CustomerService: CustomerService) { }
  
    p:number = 1; //utk page
    isValid:boolean = true;
  
    ngOnInit() 
    {
      //template
      //getData dipanggil untuk view list
      var x = this.CustomerService.getData();
      x.snapshotChanges().subscribe(item => 
      {
        this.customerList = [];
        item.forEach(element => 
        {
          var y = element.payload.toJSON();
          y["$cstKey"] = element.key;
          this.customerList.push(y as Customer);
        });
      });
    }
  
    onSubmit(form: NgForm) 
    {
      //fungsi insertEmployee dan update
      if (form.value.$cstKey == null) //jika primary key tidak ada, bikin baru
      {
        //this.CustomerService.insertCustomer(form.value);
        this.CustomerService.insertCustomer(this.CustomerService.selectedCustomer);
      }
      else //jika primary key ada update existing
      {
        //this.CustomerService.updateCustomer(form.value);
        this.CustomerService.updateCustomer(this.CustomerService.selectedCustomer);
      }
      this.resetForm(form);
    }
  
    resetForm(form?: NgForm) 
    {
      //fungsi reset
      if (form != null)
        form.reset();
      this.CustomerService.selectedCustomer = {
        $cstKey: null,
        cstId: '',
        cstName:'',
        cstCompany:''
      }
    }
  
   onDelete($cstKey: string) 
   {
      if (confirm('Are you sure to delete this record ?') == true) {
        this.CustomerService.deleteCustomer($cstKey);
      }
   }
  
    onItemClick(prd : Customer)
    {
      this.CustomerService.selectedCustomer = Object.assign({}, prd);
    }
  
    //sorting//
    isDesc: boolean = false;
    column: string = "prdName";
    records = this.CustomerService.customerList
    direction: number;
    sort(property){
      this.isDesc = !this.isDesc; //change the direction    
      this.column = property;
      this.direction = this.isDesc ? 1 : -1;
      };
  };
  
  