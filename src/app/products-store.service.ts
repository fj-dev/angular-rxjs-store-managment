import { Injectable } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';

import { IProduct, Product } from './product.model';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsStoreService {
  // Make _productsSource private so it's not accessible from the outside, 
  // expose it as products$ observable (read-only) instead.
  // Write to _productsSource only through specified store methods below.
  private readonly _productsSource = new BehaviorSubject<Product[]>([]);

  // Exposed observable (read-only).
  readonly products$ = this._productsSource.asObservable();

  constructor( private productsService: ProductsService ) {
    this.fetchAll();
  }

  // Get last value without subscribing to the products$ observable (synchronously).
  getProducts(): Product[] {
    return this._productsSource.getValue();
  }

  private _setProducts(products: Product[]): void {
    this._productsSource.next(products);
  }

  addProduct(product: Product): void {
    const products = [...this.getProducts(), product];
    this._setProducts(products);
  }

  removeProduct(product: Product): void {
    const products = this.getProducts().filter(p => p.id !== product.id);
    this._setProducts(products);
  }

  updateProductQuantity(product: Product): void {
    const products = this.getProducts().map(p => 
    {
      if (p.id === product.id) {
        const newProduct = new Product(p);
        newProduct.quantity--;
        return newProduct;
      } else {
        return p;
      }
    });
    this._setProducts(products);
  }

  private fetchAll() {
    const products = this.productsService.getAllProducts();
    this._setProducts(products);
  }
}