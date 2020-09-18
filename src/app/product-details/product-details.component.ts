import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductsStoreService } from '../products-store.service';
import { CartStoreService } from '../cart-store.service';

import { Product } from '../product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public productsStore: ProductsStoreService,
    private cartService: CartStoreService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let prod = this.productsStore.getProducts().filter(p => p.id === params.get('productId'))[0];
      this.product = prod;
    });
  }

  get isOutOfStock() {
    if (this.product && this.product.quantity < 1) {
      return true;
    } else {
      return;
    }
  }

  addToCart(product) {
    const item = new Product(product);
    this.cartService.addItem(item);
    this.productsStore.updateProductQuantity(item);
    this.router.navigate(['/product-list']);
  }

}