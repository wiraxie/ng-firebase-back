import { Injectable } from '@angular/core';

//import untuk firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

import { Pembelian } from './pembelian'; //import class Supplier


@Injectable()
export class PembelianService  {
  
    //define list variable
    pembelianList: AngularFireList<any>;
  
    selectedPembelian: Pembelian = new Pembelian();
  
    //dependency injection here
    constructor(private firebase: AngularFireDatabase) { }
  
    //template view
    getData() 
    {
      //this.pembelianList = this.firebase.list('name goes here');
      this.pembelianList = this.firebase.list('Pembelian');
      return this.pembelianList;
    }
    //setelah jadi panggil di ngOnInit()
    //end of view
  
    //template add
    insertPembelian(Pembelian: Pembelian) 
    {
      this.pembelianList.push(
      {
        supName: Pembelian.supName,
        product: Pembelian.product
      });
    }
    //setelah jadi panggil di onSubmit()
    //end of add
  
    //template update
    updatePembelian(Pembelian : Pembelian)
    {
      this.pembelianList.update(Pembelian.$beliKey,{
        supName: Pembelian.supName,
        product: Pembelian.product
      })
    }
   //end of update
  
  //template delete
  deletePembelian(key : string)
  {
    this.pembelianList.remove(key);
  }
  //end of delete
  
  }
