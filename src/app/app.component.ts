import { Component, OnInit } from '@angular/core';

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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', ]
})
export class AppComponent implements OnInit {
  
    //contructor after provide import service
    constructor(private ProductService : ProductService) { }
  
    pushMenu:boolean= false;

    ngOnInit() {}
  }
