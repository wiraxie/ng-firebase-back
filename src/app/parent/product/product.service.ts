import { Injectable } from '@angular/core';

//import untuk firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import * as firebase from 'firebase';

import { Product } from './product'; //import class product
import { FileUpload } from './file-upload';

@Injectable()
export class ProductService {

  //define list variable
  productList: AngularFireList<any>;

  selectedProduct: Product = new Product ();
  currentFileUpload: FileUpload;
  //selectedProduct: Product;

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
      prdCategory: Product.prdCategory,
      prdSup: Product.prdSup,
      prdImage: Product.prdImage,
      prdDescription: Product.prdDescription,
    });
  }
  //setelah jadi panggil di onSubmit()
  //end of add

  //template update
  updateProduct(prd : Product)
  {
    this.productList.update(prd.$prdKey,{
      prdName: prd.prdName,
      prdCategory: prd.prdCategory,
      prdSup: prd.prdSup,
      prdDescription: prd.prdDescription
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

  //testing file upload//
  private basePath = '/product';
 
  pushFileToStorage(fileUpload: FileUpload, progress: {percentage: number}) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);
 
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100)
      },
      (error) => {
        // fail
        console.log(error)
      },
      () => {
        // success
        this.selectedProduct.prdImage = fileUpload.url = uploadTask.snapshot.downloadURL
        //fileUpload.name = fileUpload.file.name
        this.saveFileData(fileUpload)
      }
    );
  }
 
  private saveFileData(fileUpload: FileUpload) {
    this.firebase.list(`${this.basePath}/`).push(fileUpload);
  }
 // ..testing file upload
}