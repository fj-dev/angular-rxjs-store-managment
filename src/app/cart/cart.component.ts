import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { CartStoreService } from '../cart-store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Output() removeCartItem = new EventEmitter();
  constructor( private cartStore: CartStoreService ) { }

  ngOnInit() {
  }

}