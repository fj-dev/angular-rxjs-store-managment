import { Component } from '@angular/core';

import { ProductsStoreService } from '../products-store.service';
import { CartStoreService } from '../cart-store.service';

import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  constructor(
    private productsStore: ProductsStoreService,
    private cartStore: CartStoreService
  ) {}
  
  onAddToCart(args) {
    const item = new Product(args);
    this.cartStore.addItem(item);
    this.productsStore.updateProductQuantity(args);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/