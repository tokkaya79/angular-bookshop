import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "src/app/app.component";
import { BooksModule } from "src/app/books/books.module";
import { AppRoutingModule } from "src/app/app-routing.module";
import { CartComponent } from 'src/app/cart/cart.component';

@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [BrowserModule, FormsModule, BooksModule, AppRoutingModule],
  bootstrap: [AppComponent]
})

export class AppModule {}
