import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  // postFile(fileToUpload: File) {
  //   throw new Error("Method not implemented.");
  // }

  constructor(private http:HttpClient) { 

  }
  postFile(fileToUpload:File)
  {
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    let headers = new Headers({ 'Content-Type': 'application/json' });    
    headers.append('Content-Type', 'multipart/form-data');

   return this.http.post<any>(`${environment.API_Url}UploadImage/PostImage`,formData);
  }
}
