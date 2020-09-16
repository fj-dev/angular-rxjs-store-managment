import { Injectable } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';

import { CartService } from './cart.service';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class CartStoreService {
  // Make _cartItems$ private so it's not accessible form the outside,
  // expose it as cartItems$ observable (read-only) instead.
  // Write to _cartItems$ only through specified store methods below.
  private readonly _cartItems$ = new BehaviorSubject<Product[]>([]);

  // Exposed observable (read-only).
  readonly cartItems$ = this._cartItems$.asObservable();

  constructor( ) {}

  getCartItems(): Product[] {
    return this._cartItems$.getValue();
  }

  private _setCartItems(products: Product[]): void {
    this._cartItems$.next(products);
  }

  addItem(product: Product): void {
    product.quantity = 1;
    const items = [...this.getCartItems(), product];
    this._setCartItems(items);
  }

  removeItem(product: Product): void {
    const items = this.getCartItems().filter(item => item.id !== product.id);
    this._setCartItems(items);
  }

  clearCart() {
    this._setCartItems([]);
  }
}