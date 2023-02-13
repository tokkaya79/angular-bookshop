import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksService } from 'src/app/books/books.service';
import { BooksComponent } from 'src/app/books/books.component';
import { BookComponent } from 'src/app/books/book/book.component';

@NgModule({
  declarations: [BooksComponent, BookComponent],
  providers: [BooksService],
  imports: [CommonModule],
  exports: [BooksComponent]
})
export class BooksModule {}
