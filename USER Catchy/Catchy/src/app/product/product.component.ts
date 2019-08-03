import { Component, OnInit } from '@angular/core';
import { Product } from '../Shared/product';
import { ProductAPIService } from '../services/product-api.service';
import { CategoryapiService } from '../services/categoryapi.service';
import { Category } from '../Shared/category';
import {LocalStorageService,SessionStorageService,LocalStorage,SessionStorage} from 'angular-web-storage'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  prdctList:Product[];

  
catList:Category[];
catID:number;
num:number;
cart:string;
  constructor(public storage:LocalStorageService,private prdctfrmAPI:ProductAPIService,private catfrmApi:CategoryapiService) { 
    this.num=0;
    this.cart= JSON.parse(this.storage.get('num1')) ;
  }

  ngOnInit() {
    this.prdctfrmAPI.getAllproduct().subscribe((res)=>{
      this.prdctList=res;
    },(err)=>{
      console.log(err);
    });
    this.catfrmApi.getCategory().subscribe((cat)=>{
      this.catList=cat;
    
    },(err)=>{
      console.log(err);
    });
    
  }

}
