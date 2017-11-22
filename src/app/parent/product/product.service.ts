import { Injectable } from '@angular/core';

//import untuk firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { Product } from './product'; //import class product

@Injectable()
export class ProductService {

  //define list variable
  productList: AngularFireList<any>;

  selectedProduct: Product = new Product();

  //dependency injection here
  constructor(private firebase: AngularFireDatabase) { }

  // login() {
  //   this.firebase.auth.signInWithPopup(this.firebase.auth.GoogleAuthProvider());
  // }

  //template view
  getData() 
  {
    //this.productList = this.firebase.list('name goes here');
    this.productList = this.firebase.list('Product');
    return this.productList;
  }
  //setelah jadi panggil di ngOnInit()
  //end of view

  //template add
  insertProduct(Product: Product) 
  {
    this.productList.push(
    {
      prdName: Product.prdName,
      prdCategoty: Product.prdCategoty,
      prdSup: Product.prdSup,
    });
  }
  //setelah jadi panggil di onSubmit()
  //end of add

  //template update
  updateProduct(prd : Product)
  {
    this.productList.update(prd.$prdKey,{
      prdName: prd.prdName,
      prdCategoty: prd.prdCategoty,
      prdSup: prd.prdSup,
    })
  }
 //end of update

  //template delete
  deleteProduct($prdKey : string)
  {
    //this.productList.remove($prdKey);
    this.productList.remove($prdKey);
  }
  //end of delete

}
