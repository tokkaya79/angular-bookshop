import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BooksComponent } from "src/app/books/books.component";
import { CartComponent } from "src/app/cart/cart.component";

const routes: Routes = [
  {path:'', component: BooksComponent},
  {path:'cart', component: CartComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
