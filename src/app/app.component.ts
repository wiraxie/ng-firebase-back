import { Component, OnInit } from '@angular/core';

import { ProductService } from './parent/product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
    //contructor after provide import service
    constructor(private ProductService : ProductService) { }
  
    ngOnInit() 
    {
      console.log('Parent component here');
    }
  
  }
