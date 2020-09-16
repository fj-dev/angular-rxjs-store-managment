import { Injectable } from '@angular/core';

import { Product } from './product.model';
import { products } from './products';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(){ }

  getAllProducts() {
    return products;
  }
}