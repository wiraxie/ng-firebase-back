import { Injectable } from '@angular/core';

//import untuk firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

import { Pembelian } from './pembelian'; //import class pembelian

@Injectable()
export class PembelianService {
  
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
        product: Pembelian.product,
      });
    }
    //setelah jadi panggil di onSubmit()
    //end of add
  
    //template update
    updatePembelian(beli : Pembelian)
    {
      this.pembelianList.update(beli.$beliKey,{
        supName: beli.supName,
        product: beli.product,
      })
    }
   //end of update
  
    //template delete
    deletePembelian($beliKey : string)
    {
      //this.pembelianList.remove($beliKey);
      this.pembelianList.remove($beliKey);
    }
    //end of delete
  
  }