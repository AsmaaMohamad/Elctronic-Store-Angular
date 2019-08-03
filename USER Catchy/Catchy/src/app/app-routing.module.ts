import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';



const routes: Routes = [
  {path :'Home',component:HomeComponent},
  {path:'Product',component:ProductComponent},
  {path:'Categories/:catID',component:CategoryComponent},
  {path:'cart',component:CartComponent},
  {path:'contact',component:ContactComponent},
  {path:'productDetails/:prdID',component:ProductDetailsComponent},
  {path:'ProductByCategory/:catID',component:ProductByCategoryComponent},
   {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
