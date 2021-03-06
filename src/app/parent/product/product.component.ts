import { Component, OnInit, Input, EventEmitter, OnDestroy, HostListener, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProductService } from './product.service'; //service
import { AuthService } from '../../auth.service';

//class
import { Product } from './product'; 

import { ProductPipe } from './product.pipe';
import { PrdSortPipe } from './prd-sort.pipe';

import * as firebase from 'firebase'

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  //providers : [ ProductService ],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit 
{

  //class Product
  //productList: Product[];
  productList: Product[] = [];

  //after import masukkan ke constructor
  constructor(private ProductService: ProductService, private AuthService: AuthService) { }

  p:number = 1; //utk page
  isValid:boolean = true;
  isDetail:boolean = true;

  ngOnInit() 
  {
    //template
    //getData dipanggil untuk view list
    var x = this.ProductService.getData();
    x.snapshotChanges().subscribe(item => 
    {
      this.productList = [];
      item.forEach(element => 
      {
        var y = element.payload.toJSON();
        y["$prdKey"] = element.key;
        this.productList.push(y as Product);
      });
    });
    AuthService;
  }

  i:number;

  resetForm(form?: NgForm) 
  {
    //fungsi reset
    if (form != null)
      form.reset();
    this.ProductService.selectedProduct = {
      $prdKey: null,
      prdName: '',
      prdCategory:'',
      prdSup:'',
      prdDescription: '',
      prdImage: '',
      prdUrl:'',
      file: null,
    }
  }

  onDelete($prdKey: string) 
  {
      if (confirm('Are you sure to delete this record ?') == true) 
      {
        this.ProductService.deleteProduct($prdKey);
      }
      // else if(document.getElementById("$prdKey").value == true) //checkbox delete here
      // {
      //   if(confirm('Are you sure to delete these records ?') == true)
      //   {
      //     this.ProductService.deleteProduct($prdKey);
      //   }
      // }
  }

  onItemClick(prd : Product)
  {
    this.ProductService.selectedProduct = Object.assign({}, prd);
  }

  //sorting//
  isDesc: boolean = false;
  column: string = "prdName";
  records = this.ProductService.productList
  direction: number;
  sort(property)
  {
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };

    //test upload file//
    selectedFiles: FileList;
    currentFileUpload: Product;
    progress: {percentage: number} = {percentage: 0}
    
    selectFile(event) 
    {
      this.selectedFiles = event.target.files;
    }

    item:any = [];
    upload() 
    {
      const file = this.selectedFiles.item(0);
      this.currentFileUpload = new Product(file);
      this.ProductService.pushFileToStorage(this.currentFileUpload, this.progress);
    }
    //test upload file//
}