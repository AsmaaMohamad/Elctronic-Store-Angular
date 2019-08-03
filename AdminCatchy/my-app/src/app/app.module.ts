import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './AllComponent/login/login.component';
import { AdminIndexComponent } from './AllComponent/admin-index/admin-index.component';
import { ProductComponent } from './AllComponent/product/product.component';
import { CategoryComponent } from './AllComponent/category/category.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { AdminFromApiService } from './Services/admin-from-api.service';
import { CategoryFromApiService } from './Services/category-from-api.service';
import { ProductFromApiService } from './Services/product-from-api.service';
import { OrderFromApiService } from './Services/order-from-api.service';
import { StorageAdminService } from './Services/storage-admin.service';
import { ProductServiceService } from './Services/product-service.service';
import { AllCategoriesComponent } from './AllComponent/all-categories/all-categories.component';
import { EditProductComponent } from './AllComponent/edit-product/edit-product.component';
import { AllProductsComponent } from './AllComponent/all-products/all-products.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminIndexComponent,
    ProductComponent,
    CategoryComponent,
    AllCategoriesComponent,
    EditProductComponent,
    AllProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StorageServiceModule,
    ],
    providers: [AdminFromApiService,
      CategoryFromApiService,
      ProductFromApiService,
      OrderFromApiService,
      StorageAdminService,
      ProductServiceService

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
