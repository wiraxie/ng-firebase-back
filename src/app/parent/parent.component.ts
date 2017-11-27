import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgIf } from '@angular/common';
import { AppComponent } from '../app.component';

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
import { AuthService } from '../auth.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ParentComponent implements OnInit {

  ngOnInit() {}

  constructor(private AuthService: AuthService) {}

  //.................................test by email.......................................//
  isNewUser = true;
  email = '';
  password = '';
  errorMessage = '';
  error: {name: string, message: string} = {name: '', message: ''};

  clearErrorMessage() 
  {
    this.errorMessage = '';
    this.error = {name: '', message: ''};
  }
 
  changeForm() 
  {
    this.isNewUser = !this.isNewUser
  }
 
  onSignUp(): void 
  {
    this.clearErrorMessage()
 
    if (this.validateForm(this.email, this.password)) {
      this.AuthService.signUpWithEmail(this.email, this.password)
        .catch(_error => {
          this.error = _error
         })
    }
  }
 
  onLoginEmail(): void 
  {
    this.clearErrorMessage()
 
    if (this.validateForm(this.email, this.password)) {
      this.AuthService.loginWithEmail(this.email, this.password)
        .catch(_error => 
        {
          this.error = _error
        })
    }
  }
 
  validateForm(email: string, password: string): boolean 
  {
    if (email.length === 0) 
    {
      this.errorMessage = 'Please enter Email!'
      return false
    }
 
    if (password.length === 0) 
    {
      this.errorMessage = 'Please enter Password!'
      return false
    }
 
    if (password.length < 6) 
    {
      this.errorMessage = 'Password should be at least 6 characters!'
      return false
    }
 
    this.errorMessage = ''
 
    return true
  }

  logout() 
  {
    this.AuthService.signOut();
  }
  //.................................test by email.......................................//

  showProduct:boolean = true;
  showCustomer:boolean = false;
  showSupplier:boolean = false;
  showJual:boolean = false;
  showBeli:boolean = false;
}
