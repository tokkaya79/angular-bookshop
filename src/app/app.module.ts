import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "src/app/app.component";
import { BooksModule } from "src/app/books/books.module";
import { AppRoutingModule } from "src/app/app-routing.module";
import { CartComponent } from 'src/app/cart/cart.component';
import { AuthModule } from "src/app/auth/auth.module";

@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [BrowserModule, BooksModule, AppRoutingModule, AuthModule],
  bootstrap: [AppComponent]
})

export class AppModule {}
