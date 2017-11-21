import { Injectable } from '@angular/core';

//import untuk firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

import { Customer } from './Customer'; //import class Customer

@Injectable()
export class CustomerService {
  
    //define list variable
    customerList: AngularFireList<any>;
  
    selectedCustomer: Customer = new Customer();
  
    //dependency injection here
    constructor(private firebase: AngularFireDatabase) { }
  
    //template view
    getData() 
    {
      //this.customerList = this.firebase.list('name goes here');
      this.customerList = this.firebase.list('Customer');
      return this.customerList;
    }
    //setelah jadi panggil di ngOnInit()
    //end of view
  
    //template add
    insertCustomer(Customer: Customer) 
    {
      this.customerList.push(
      {
        cstId: Customer.cstId,
        cstName: Customer.cstName,
        cstCompany: Customer.cstCompany
      });
    }
    //setelah jadi panggil di onSubmit()
    //end of add
  
    //template update
    updateCustomer(cst : Customer)
    {
      this.customerList.update(cst.$cstKey,{
        cstId: cst.cstId,
        cstName: cst.cstName,
        cstCompany: cst.cstCompany
      })
    }
   //end of update
  
    //template delete
    deleteCustomer($cstKey : string)
    {
      //this.customerList.remove($cstKey);
      this.customerList.remove($cstKey);
    }
    //end of delete
  
  }
  