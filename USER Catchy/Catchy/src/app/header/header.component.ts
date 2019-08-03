import { Component, OnInit } from '@angular/core';
import { ProductAPIService } from '../services/product-api.service';
import { Product } from '../Shared/product';
import { Category } from '../Shared/category';
import { CategoryapiService } from '../services/categoryapi.service';

import { WebStorageService } from 'ngx-webstorage-service';
import {LocalStorageService,SessionStorageService,LocalStorage,SessionStorage} from 'angular-web-storage'
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  prdctList:Product[];
  catList:Category[];
  catID:number;
  cart:number;
  selectedcatByID:number;
  
  
  constructor(private router: Router, private activatedRouter:ActivatedRoute,public storage:LocalStorageService,private prdctfrmAPI:ProductAPIService,private catfrmApi:CategoryapiService,private activatedRoute:ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
   }

   this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
         // trick the Router into believing it's last link wasn't previously loaded
         this.router.navigated = false;
         // if you need to scroll back to top, here is the right place
         window.scrollTo(0, 0);
      }
  });
   }

  ngOnInit() {
   // this.prdctfrmAPI.currentCart.subscribe(c=>this.cart=c);
   // this.cart= JSON.parse(this.storage.get('num1')) ;
   this.cart= JSON.parse(localStorage.getItem("num"));
   console.log("cart:"+ this.cart);
    
    this.catfrmApi.getCategory().subscribe((cat)=>{
      this.catList=cat;
  },(err)=>{
    console.log(err);
  });
  // this.selectedcatByID = this.activatedRoute.snapshot.params['catID'];
  //   this.catfrmApi.getProductByCategoryID(this.selectedcatByID).subscribe(cat=>{this.prdctList=cat},
  //     (err)=>{
  //     console.log(err);
  //   });
}
/* items(){
  this.selectedcatByID = this.activatedRouter.snapshot.params['catID'];
  this.catfrmApi.getProductByCategoryID(this.selectedcatByID).subscribe(cat=>{this.prdctList=cat},
    (err)=>{
    console.log(err);
  });
  console.log("cat ID : "+this.selectedcatByID+"products : "+this.prdctList);
} */



  

}
