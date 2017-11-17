import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { NgxPaginationModule } from 'ngx-pagination';

//import ang. firebase module
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ProductComponent } from './parent/product/product.component';
import { CustomerComponent } from './parent/customer/customer.component';
import { SupplierComponent } from './parent/supplier/supplier.component';
import { PenjualanComponent } from './parent/penjualan/penjualan.component';
import { PembelianComponent } from './parent/pembelian/pembelian.component';

//import dari invirontment
import { environment } from '../environments/environment'

//services
import { ProductService } from './parent/product/product.service';
import { CustomerService }  from './parent/customer/customer.service';
import { SupplierService } from './parent/supplier/supplier.service';
import { PenjualanService } from './parent/penjualan/penjualan.service';
import { PembelianService } from './parent/pembelian/pembelian.service';
import { FilterPipe } from './parent/product/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ProductComponent,
    CustomerComponent,
    SupplierComponent,
    PenjualanComponent,
    PembelianComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    FormsModule,
    CustomFormsModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), //environtment. yg di environtment 
  ],
  providers: [ ProductService, CustomerService, SupplierService, PenjualanService, PembelianService ],
  bootstrap: 
  [
    AppComponent,
    ParentComponent,
  ]
})
export class AppModule { }
