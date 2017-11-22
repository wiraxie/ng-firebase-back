import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgIf } from '@angular/common';

import { ProductService } from './product/product.service';
import { Product } from './product/product';

import { CustomerService } from './customer/customer.service';
import { Customer } from './customer/customer';

import { SupplierService } from './supplier/supplier.service';
import { Supplier } from './supplier/supplier';

import { PembelianService } from './pembelian/pembelian.service';
import { Pembelian } from './pembelian/pembelian';

import { PenjualanService } from './penjualan/penjualan.service';
import { Penjualan } from './penjualan/penjualan';

import { ParentService } from './parent.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ParentComponent implements OnInit {

  constructor() {}

  showProduct:boolean = true;
  showCustomer:boolean = false;
  showSupplier:boolean = false;
  showJual:boolean = false;
  showBeli:boolean = false;

  ngOnInit() 
  {
  
  }
}
