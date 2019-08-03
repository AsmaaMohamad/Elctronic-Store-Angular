import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './AllComponent/login/login.component';
import { AdminIndexComponent } from './AllComponent/admin-index/admin-index.component';
import { ProductComponent } from './AllComponent/product/product.component';
import { CategoryComponent } from './AllComponent/category/category.component';
import { AllCategoriesComponent } from './AllComponent/all-categories/all-categories.component';
import { EditProductComponent } from './AllComponent/edit-product/edit-product.component';
import { AllProductsComponent } from './AllComponent/all-products/all-products.component';

const routes: Routes = [
  
  {path :'Product', component:AdminIndexComponent,
  children :[{path:'',component:ProductComponent}]},
  {path :'Category', component:AdminIndexComponent,
  children :[{path:'',component:CategoryComponent}]},
  {path :'Admin',component:AdminIndexComponent},
  {path:'allCategories',component:AllCategoriesComponent},
  {path:'allProducts',component:AllProductsComponent},
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  {path :'Login',component:LoginComponent, pathMatch:'full'},
  {path :'Edit', component:AdminIndexComponent,
  children :[{path:'',component:EditProductComponent}]},
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
