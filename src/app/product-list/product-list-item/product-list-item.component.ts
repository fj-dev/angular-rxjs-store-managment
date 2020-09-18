import { Component, Input, OnInit, Output, OnDestroy, EventEmitter } from '@angular/core';

import { Product } from '../../product.model';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit, OnDestroy {
  @Input() product: Product;
  @Output() addToCart = new EventEmitter();

  constructor() { }

  get isOutOfStock() {
    if (this.product && this.product.quantity < 1) {
      return true;
    } else {
      return;
    }
  }
  ngOnInit() {
  }

  ngOnDestroy() {
    this.addToCart.complete();
  }

}