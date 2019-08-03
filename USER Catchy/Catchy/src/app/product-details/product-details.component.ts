import { Component, OnInit, inject } from '@angular/core';
import { ProductAPIService } from '../services/product-api.service';
import { LOCAL_STORAGE, StorageService, SESSION_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Product } from '../Shared/product';
import { StoaregeCartService } from '../services/stoarege-cart.service';
import {LocalStorageService,SessionStorageService,LocalStorage,SessionStorage} from 'angular-web-storage'

import { from } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  selectedProduct:Product;
  num:number;
 

  abilityCart:boolean;
  constructor(private productServiceAPI:ProductAPIService,
    private activatedRoute:ActivatedRoute,
    private storageService:StoaregeCartService,public storage:LocalStorageService,private router:Router) {
     this.num = 0;
      this.abilityCart = false;
    
     }


     ProdStringValue:Product[]=[];
     num1:number[]=[];
     addToCart(prd:Product)
   {
     this.num++;
     this.num+= JSON.parse(localStorage.getItem("num"));
     localStorage.setItem("num",JSON.stringify(this.num));
     //get the old list
    this.ProdStringValue= JSON.parse(localStorage.getItem("product"));
    //push the new list
    this.ProdStringValue.push(prd);
    //set the new data to local storage
    localStorage.setItem("product",  JSON.stringify(this.ProdStringValue));
    
    
   }

  ngOnInit() {
    const selectedProductByID = this.activatedRoute.snapshot.params['prdID'];
    this.productServiceAPI.getproductByID(selectedProductByID)
    .subscribe(
      (res)=>{
        this.selectedProduct= res;
      },
      (err)=>{console.log(err);});
  }

}
