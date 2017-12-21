import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
//import { FormlyModule, FormlyBootstrapModule } from 'ng-formly';

//import ang. firebase module
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';

//import * as firebase from 'firebase';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ProductComponent } from './parent/product/product.component';
import { CustomerComponent } from './parent/customer/customer.component';
import { SupplierComponent } from './parent/supplier/supplier.component';
import { PenjualanComponent } from './parent/penjualan/penjualan.component';
import { PembelianComponent } from './parent/pembelian/pembelian.component';

//router
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

//import dari invirontment
import { environment } from '../environments/environment'

//services
import { ProductService } from './parent/product/product.service';
import { CustomerService }  from './parent/customer/customer.service';
import { SupplierService } from './parent/supplier/supplier.service';
import { PenjualanService } from './parent/penjualan/penjualan.service';
import { PembelianService } from './parent/pembelian/pembelian.service';
import { ParentService } from './parent/parent.service';
import { AuthService } from './auth.service';

//dari pipe baru
import { ProductPipe } from './parent/product/product.pipe';
import { SupplierPipe } from './parent/supplier/supplier.pipe';
import { CustomerPipe } from './parent/customer/customer.pipe';
import { PenjualanPipe } from './parent/penjualan/penjualan.pipe';
import { PembelianPipe } from './parent/pembelian/pembelian.pipe';

//pipe sort table
import { PrdSortPipe } from './parent/product/prd-sort.pipe';
import { SupSortPipe } from './parent/supplier/sup-sort.pipe';
import { CstSortPipe } from './parent/customer/cst-sort.pipe';
import { JualSortPipe } from './parent/penjualan/jual-sort.pipe';
import { BeliSortPipe } from './parent/pembelian/beli-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ProductComponent,
    CustomerComponent,
    SupplierComponent,
    PenjualanComponent,
    PembelianComponent,

    //pipe baru
    ProductPipe,
    SupplierPipe,
    CustomerPipe,
    PenjualanPipe,
    PembelianPipe,
    PrdSortPipe,
    SupSortPipe,
    CstSortPipe,
    JualSortPipe,
    BeliSortPipe,
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    FormsModule,
    CustomFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    //FormlyModule,
    //Formly2strapModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(environment.firebaseConfiguration), //environtment. yg di environtment 
  ],
  providers: [ AuthService, ParentService, ProductService, CustomerService, SupplierService, PenjualanService, PembelianService],
  bootstrap: 
  [
    AppComponent,
    ParentComponent,
  ]
})
export class AppModule { }
