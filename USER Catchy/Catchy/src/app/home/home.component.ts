import { Component, OnInit } from '@angular/core';
import { ProductAPIService } from '../services/product-api.service';
import { Product } from '../Shared/product';
import { Category } from '../Shared/category';
import { CategoryapiService } from '../services/categoryapi.service';
import { WebStorageService } from 'ngx-webstorage-service';
import {LocalStorageService,SessionStorageService,LocalStorage,SessionStorage} from 'angular-web-storage'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
prdctList:Product[];
catList:Category[];
catID:number;
cart:number;
  constructor(public storage:LocalStorageService,private prdctfrmAPI:ProductAPIService,private catfrmApi:CategoryapiService) { 
   // this.cart='0';
  //  this.prdctfrmAPI.currentCart.subscribe(c=>this.cart=c);
 
  }
 
  ngOnInit() {
  //  this.cart= JSON.parse(this.storage.get('num1')) ;
   
   // console.log("cart"+this.cart);
   // console.log("c "+ this.prdctfrmAPI.currentCart.subscribe(c=>this.cart=c));
  // this.cart=localStorage.getItem('num');
  //let cart=JSON.parse(this.storage.get('num1'));
  
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
    this.prdctfrmAPI
  }

}
