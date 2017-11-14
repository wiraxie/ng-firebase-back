import { Injectable } from '@angular/core';

//import untuk firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

import { Product } from './product'; //import class product

@Injectable()
export class ProductService {

  //define list variable
  productList: AngularFireList<any>;

  selectedProduct: Product = new Product();

  //dependency injection here
  constructor(private firebase: AngularFireDatabase) { }

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
      prdCat: Product.prdCat,
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
      prdCat: prd.prdCat,
      prdSup: prd.prdSup,
    })
  }
 //end of update

//template delete
deleteProduct(key : string)
{
  this.productList.remove(key);
}
//end of delete

}
