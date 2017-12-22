import { Injectable } from '@angular/core';

//import untuk firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import * as firebase from 'firebase';

import { Product } from './product'; //import class product

@Injectable()
export class ProductService {

  //define list variable
  productList: AngularFireList<any>;

  variable: any;
  selectedProduct: Product = new Product (this.variable);

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
  //  this.productList.push(
  //  {
  //   prdName: Product.prdName,
  //   prdCategory: Product.prdCategory,
  //   prdSup: Product.prdSup,
  //   prdUrl: Product.prdUrl, //
  //   prdDescription: Product.prdDescription,
  //   });
  }
   //setelah jadi panggil di onSubmit()
   //end of add

  //template update
  updateProduct(prd : Product)
  {
    // this.productList.update(prd.$prdKey,
    // {
    //   prdName: prd.prdName,
    //   prdCategory: prd.prdCategory,
    //   prdSup: prd.prdSup,
    //   prdDescription: prd.prdDescription
    // })
  }
 //end of update

  //template delete
  deleteProduct($prdKey : string)
  {
    //this.productList.remove($prdKey);
    this.productList.remove($prdKey);
  }
  //end of delete

  //testing file upload//
  private basePath = '/Product';
 
  pushFileToStorage(Product: Product, progress: {percentage: number}) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${Product.file.name}`).put(Product.file);
 
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => 
      {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100)
      },
      (error) => 
      {
        // fail
        console.log(error)
      },
      () => 
      {
        // success
        
        if (this.selectedProduct.$prdKey == null)
        {
          this.productList.push
          ({
            prdName:  this.selectedProduct.prdName,
            prdCategory:  this.selectedProduct.prdCategory,
            prdSup: this.selectedProduct.prdSup,
            prdDescription:  this.selectedProduct.prdDescription,
            prdUrl: this.selectedProduct.prdUrl = uploadTask.snapshot.downloadURL,
            prdImage: this.selectedProduct.prdImage = Product.file.name,
          })
        }else if(this.selectedProduct.$prdKey != null)
        {
          this.productList.update(this.selectedProduct.$prdKey, 
          {
            prdName:  this.selectedProduct.prdName,
            prdCategory:  this.selectedProduct.prdCategory,
            prdSup: this.selectedProduct.prdSup,
            prdDescription:  this.selectedProduct.prdDescription,
            prdUrl: this.selectedProduct.prdUrl = uploadTask.snapshot.downloadURL,
            prdImage: this.selectedProduct.prdImage = Product.file.name,
          })
        }

        this.saveFileData(Product)
      }
    );
  }
 
  private saveFileData(Product: Product) 
  {
    this.firebase.list(`${this.basePath}/`).push(Product);
  }
 // ..testing file upload
}