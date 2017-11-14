import { Injectable } from '@angular/core';

//import untuk firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

import { Supplier } from './supplier'; //import class Supplier

@Injectable()
export class SupplierService {
  
    //define list variable
    supplierList: AngularFireList<any>;
  
    selectedSupplier: Supplier = new Supplier();
  
    //dependency injection here
    constructor(private firebase: AngularFireDatabase) { }
  
    //template view
    getData() 
    {
      //this.supplierList = this.firebase.list('name goes here');
      this.supplierList = this.firebase.list('Supplier');
      return this.supplierList;
    }
    //setelah jadi panggil di ngOnInit()
    //end of view
  
    //template add
    insertSupplier(Supplier: Supplier) 
    {
      this.supplierList.push(
      {
        supName: Supplier.supName,
        supProduct: Supplier.supProduct,
        supLocation: Supplier.supLocation,
      });
    }
    //setelah jadi panggil di onSubmit()
    //end of add
  
    //template update
    updateSupplier(sup : Supplier)
    {
      this.supplierList.update(sup.$supKey,{
        supName: sup.supName,
        supProduct: sup.supProduct,
        supLocation: sup.supLocation,
      })
    }
   //end of update
  
  //template delete
  deleteSupplier(key : string)
  {
    this.supplierList.remove(key);
  }
  //end of delete
  
  }
