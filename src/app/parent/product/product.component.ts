import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProductService } from './product.service'; //service
import { Product } from './product'; //class
import { ProductPipe } from './product.pipe';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  //class Product
  productList: Product[];

  //after import masukkan ke constructor
  constructor(private productService: ProductService) { }

  p:number = 1;

  ngOnInit() 
  {
    //template
    //getData dipanggil untuk view list
    var x = this.productService.getData();
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
  }

  onSubmit(form: NgForm) 
  {
    //fungsi insertEmployee dan update
    if (form.value.$prdKey == null) //jika primary key tidak ada, bikin baru
    {
      //this.productService.insertProduct(form.value);
      this.productService.insertProduct(this.productService.selectedProduct);
    }
    else //jika primary key ada update existing
    {
      //this.productService.updateProduct(form.value);
      this.productService.updateProduct(this.productService.selectedProduct);
    }
    this.resetForm(form);
  }

  resetForm(form?: NgForm) 
  {
    //fungsi reset
    if (form != null)
      form.reset();
    this.productService.selectedProduct = {
      $prdKey: null,
      prdName: '',
      prdCat:'',
      prdSup:''
    }
  }

  onDelete(form: NgForm) 
  {
    //fungsi deleteProduct()
    if (confirm('Are you sure to delete this record ?') == true) {
      this.productService.deleteProduct(form.value.$prdKey);
      this.resetForm(form);
    }
  }

  onItemClick(prd : Product)
  {
    this.productService.selectedProduct = Object.assign({}, prd);
  }

}
