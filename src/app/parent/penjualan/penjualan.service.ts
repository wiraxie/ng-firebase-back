import { Injectable } from '@angular/core';

//import untuk firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

import { Penjualan } from './penjualan'; //import class Penjualan

@Injectable()
export class PenjualanService {
  
    //define list variable
    penjualanList: AngularFireList<any>;
  
    selectedPenjualan: Penjualan = new Penjualan();
  
    //dependency injection here
    constructor(private firebase: AngularFireDatabase) { }
  
    //template view
    getData() 
    {
      //this.penjualanList = this.firebase.list('name goes here');
      this.penjualanList = this.firebase.list('Penjualan');
      return this.penjualanList;
    }
    //setelah jadi panggil di ngOnInit()
    //end of view
  
    //template add
    insertPenjualan(Penjualan: Penjualan) 
    {
      this.penjualanList.push(
      {
        cstId: Penjualan.cstId,
        cstName: Penjualan.cstName,
        product: Penjualan.product,
      });
    }
    //setelah jadi panggil di onSubmit()
    //end of add
  
    //template update
    updatePenjualan(Penjualan : Penjualan)
    {
      this.penjualanList.update(Penjualan.$jualKey,{
        cstId: Penjualan.cstId,
        cstName: Penjualan.cstName,
        product: Penjualan.product,
      })
    }
   //end of update
  
  //template delete
  deletePenjualan(key : string)
  {
    this.penjualanList.remove(key);
  }
  //end of delete
  
  }
