import { Component, OnInit } from '@angular/core';
//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { ProductService } from './parent/product/product.service';
import { Product } from './parent/product/product';

import { SupplierService } from './parent/supplier/supplier.service';
import { Supplier } from './parent/supplier/supplier';

import { CustomerService } from './parent/customer/customer.service';
import { Customer } from './parent/customer/customer';

import { PembelianService } from './parent/pembelian/pembelian.service';
import { Pembelian } from './parent/pembelian/pembelian';

import { PenjualanService } from './parent/penjualan/penjualan.service';
import { Penjualan } from './parent/penjualan/penjualan';

//import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', ]
})
export class AppComponent implements OnInit {
  
  ngOnInit() {}
  pushMenu:boolean= false;
  constructor(private testing: AuthService) {}

  CallLogin()
  {
    this.testing.login();
  }

  CallLogOut()
  {
    this.testing.logOut();
  }
}
