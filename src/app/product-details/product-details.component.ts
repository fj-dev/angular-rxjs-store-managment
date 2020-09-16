import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsStoreService } from '../products-store.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    public productsStore: ProductsStoreService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let prod = this.productsStore.getProducts().filter(p => p.id === params.get('productId'))[0];
      this.product = prod;
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
  }

}