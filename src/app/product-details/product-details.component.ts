import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product.model';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    })
  }

}