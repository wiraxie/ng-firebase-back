import { Component, OnInit, Input, EventEmitter, OnDestroy, HostListener, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProductService } from './product.service'; //service
import { AuthService } from '../../auth.service';

import { Product } from './product'; //class
import { ProductPipe } from './product.pipe';
import { PrdSortPipe } from './prd-sort.pipe';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  //providers : [ ProductService ],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  //class Product
  //productList: Product[];
  productList: Product[] = [];

  //after import masukkan ke constructor
  constructor(private ProductService: ProductService, private AuthService: AuthService) { }

  p:number = 1; //utk page
  isValid:boolean = true;

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
  // testSubmit()
  // {
  //   for (this.i=0; this.i<1000000; this.i++)
  //   {
  //     this.onSubmit;
  //   }
  // }

  onSubmit(form: NgForm) 
  {
    //fungsi insertProduct dan update
    if (form.value.$prdKey == null) //jika primary key tidak ada, bikin baru
    {
      this.ProductService.insertProduct(form.value);
      for(this.i=0; this.i<10000; this.i++)
      {
        this.ProductService.insertProduct(this.ProductService.selectedProduct);
      }
      //this.ProductService.insertProduct(this.ProductService.selectedProduct);
    }
    else //jika primary key ada update existing
    {
      //this.ProductService.updateProduct(form.value);
      this.ProductService.updateProduct(this.ProductService.selectedProduct);
    }
    this.resetForm(form);
  }

  resetForm(form?: NgForm) 
  {
    //fungsi reset
    if (form != null)
      form.reset();
    this.ProductService.selectedProduct = {
      $prdKey: null,
      prdName: '',
      prdCategory:'',
      prdSup:''
    }
  }

 onDelete($prdKey: string) 
 {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.ProductService.deleteProduct($prdKey);
    }
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
  sort(property){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
    };
};