import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminFromApiService {

  constructor(private httpClient: HttpClient) {
    
   }
   CheckAdmin(username:string, pass:string): Observable<any>
  {
   console.log(""+`${environment.API_Url}Admins/GetCheckAdmin/${username}/${pass}`);
    return this.httpClient.get<any>(`${environment.API_Url}Admins/GetCheckAdmin/${username}/${pass}`);
  }
}

