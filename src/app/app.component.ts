import { Component, OnInit } from '@angular/core';

import { ParentComponent } from './parent/parent.component';

import { ProductComponent } from './parent/product/product.component';
import { ProductService } from './parent/product/product.service';
import { Product } from './parent/product/product';

//import { Router } from '@angular/router';
import { AuthService } from './auth.service';

declare var jquery:any;
declare var $ :any;

/*https://www.youtube.com/watch?v=wQ5z9SFBlek*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', ]
})
export class AppComponent implements OnInit {
 
  productList: Product[] = [];

  showProduct:boolean = true;
  showCustomer:boolean = false;
  showSupplier:boolean = false;
  showJual:boolean = false;
  showBeli:boolean = false;
  
  prdList:boolean = true;

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
  }

  pushMenu:boolean= false;
  constructor(private AuthService: AuthService, private ProductService: ProductService) {}

  isBtn:boolean = true;

  CallLogin()
  {
    this.AuthService.login();
  }

  CallLogOut()
  {
    this.AuthService.logOut();
  }
  logout() 
  {
    this.AuthService.signOut();
  }

}