import { Injectable } from '@angular/core';
import { Book } from 'src/app/types/book.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<Book> = []

  constructor() { }

  add(book: Book) {
    this.cart.push(book)
  }

  get(){
    return this.cart
  }
  remove(book: Book){
    this.cart = this.cart.filter(b => b !== book)
  }
}
