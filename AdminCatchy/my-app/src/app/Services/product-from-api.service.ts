import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../shared/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { Category } from '../shared/category';

@Injectable({
  providedIn: 'root'
})
export class ProductFromApiService {

  constructor(private httpClient: HttpClient) { }
  getAllProducts(): Observable <Product[]> {
    console.log("services");
    return this.httpClient
    .get <Product[]>(`${environment.API_Url}Product`);
  }
  
  getProductByID(proID:number): Observable<Product>
  {
    console.log("services");
    return this.httpClient
    .get <Product>(`${environment.API_Url}Product/${proID}`);
  }
  
  deleteProduct(proID:number): Observable <Product> {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': ' */*'
      })};
      console.log("services");
    return this.httpClient
      .delete <Product>(`${environment.API_Url}Product/${proID}`,httpOptions);
  }
   
  insertProduct(newPrd: Product): Observable <any> {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': ' */*'
      })};
      console.log("insert product");
      return this.httpClient
      .post <any>(`${environment.API_Url}Product`, newPrd, httpOptions); 
   }
   updateProduct(proID:number,newPrd: Product): Observable <any> {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': ' */*'
      })};
      console.log("Done");
    return this.httpClient
    .put <any>(`${environment.API_Url}Products/1`, newPrd, httpOptions);
   }

  GetProductsByCategory(catId:number):Observable<Product[]>{
    console.log("Service: Get Products By category ID");
     return this.httpClient
     .get <Product[]>(`${environment.API_Url}Product/GetProductsByCat/${catId}`);
  }
  
  getAllCategories(): Observable <Category[]> {
    console.log("Service: Get All Categories");
    return this.httpClient
    .get <Category[]>(`${environment.API_Url}Categories`);
  }

}
