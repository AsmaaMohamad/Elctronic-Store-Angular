import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../Shared/category';
import { environment } from 'src/environments/environment';
import { Product } from '../Shared/product';

@Injectable({
  providedIn: 'root'
})
export class CategoryapiService {

  constructor(private httpClient:HttpClient) { }
  getCategory():Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${environment.API_Url}Categories`);
     
    }
    getCategoryById(catID:number):Observable<Category>{
      return this.httpClient.get<Category>(`${environment.API_Url}GetCategory/${catID}`);
       
      }
  getProductByCategoryID(catID:number): Observable<Product[]>
  {
    return this.httpClient
    .get<Product[]>(`${environment.API_Url}Products/GetProductsByCat/${catID}`);
  }
  }

