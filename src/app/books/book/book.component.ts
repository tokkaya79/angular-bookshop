import { Component, Input } from '@angular/core';

import { CartService } from 'src/app/cart/cart.service';
import { Book } from 'src/app/types/book.interface';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  isInCart: boolean = false;

  @Input() book: Book = {} as Book


  constructor(private cartService: CartService) {}

addToCart() {
  this.cartService.add(this.book)
  this.isInCart = true
}
removeFromCart() {
  this.cartService.remove(this.book)
  this.isInCart = false
}

}
