import { Component, OnInit } from '@angular/core';

import { Book } from 'src/app/types/book.interface';
import { BooksService } from 'src/app/books/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})

export class BooksComponent implements OnInit {
  constructor(private booksService: BooksService) {}

  books: Book[] = [];
  searchName: string = '';
  isDisabled: boolean = false;
  isShowing: boolean = true;
 

  handleBtn() {
    this.isDisabled = !this.isDisabled;
  }

  handleInput(event: any) {
    this.searchName = event.target.value;
  }
  toggleBooks() {
    this.isShowing = !this.isShowing;
  }

  ngOnInit() {
    this.books = this.booksService.getBooks();
  }
}
