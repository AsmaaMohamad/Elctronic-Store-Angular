import { Injectable } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Shared/product';
import { environment } from 'src/environments/environment.prod';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {
  private cartSource =  new Subject<number>();
  currentCart = this.cartSource.asObservable();
  private listCartSource = new Subject<Product[]>();
  currentProduct = this.listCartSource.asObservable();
  constructor(private httpClient:HttpClient) {
   }
   ChangeCart(num:number)
  {
    if(num>0)
    {
      this.cartSource.next(num);
    }
  }
  
   getAllproduct():Observable<Product[]>{
     return this.httpClient.get<Product[]>(`${environment.API_Url}Products`);
      
     }
     getproductByID(prdID:number):Observable<Product>{
      console.log("services, Get Product Details");
        return this.httpClient
      .get <Product>(`${environment.API_Url}Products/${prdID}`);
      }


      
      getproductByCategory(catID:number):Observable<Product[]>{
        return this.httpClient.get<Product[]>(`${environment.API_Url}GetProduct/${catID}`);
        }
      
     

    }
