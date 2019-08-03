import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Category } from '../shared/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryFromApiService {

  constructor(private httpClient: HttpClient) { }
  insertCategory(newCat: Category): Observable <any> {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': ' */*'
        })};
    return this.httpClient
    .post <any>(`${environment.API_Url}Categories`, newCat, httpOptions);
   }
   
   getAllCategories(): Observable <Category[]> {
    console.log("Service: Get All Categories");
    return this.httpClient
    .get <Category[]>(`${environment.API_Url}Categories`);
  }
}
