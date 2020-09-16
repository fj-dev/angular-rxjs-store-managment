import { Component } from '@angular/core';

import { ProductsStoreService } from './products-store.service';
import { CartStoreService } from './cart-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  constructor( public productsStore: ProductsStoreService, 
  public cartStore: CartStoreService ) {}

  onRemoveCartItem(arg) {
    const product = this.cartStore.removeItem(arg);
    this.productsStore.restockProduct(product);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/