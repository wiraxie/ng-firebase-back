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
      this.pembelianList = this.firebase.list('pembelian');
      return this.pembelianList;
    }
    //setelah jadi panggil di ngOnInit()
    //end of view
  
    //template add
    insertPembelian(pembelian: Pembelian) 
    {
      this.pembelianList.push(
      {
        supName: pembelian.supName,
        product: pembelian.product,
      });
    }
    //setelah jadi panggil di onSubmit()
    //end of add
  
    //template update
    updatePembelian(pembelian : Pembelian)
    {
      this.pembelianList.update(pembelian.$beliKey,{
        supName: pembelian.supName,
        product: pembelian.product,
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
