import { Component } from '@angular/core';

import { products } from '../products';

import { ProductsStoreService } from '../products-store.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products = products;
  
  constructor( public productsStore: ProductsStoreService ) {}

  onAdd(args) {

  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/