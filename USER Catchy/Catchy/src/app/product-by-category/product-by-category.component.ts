import { Component, OnInit } from '@angular/core';
import { Product } from '../Shared/product';
import { ProductAPIService } from '../services/product-api.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CategoryapiService } from '../services/categoryapi.service';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.css']
})
export class ProductByCategoryComponent implements OnInit{
  listProducts:Product[];
  num:number;
  abilityCart:boolean;
  selectedcatByID:number;
  prdctList:Product[]; 
  selectedDay: string = '';
  constructor(productServiceAPI:ProductAPIService,
    private activatedRouter:ActivatedRoute,private catfrmApi:CategoryapiService,private router: Router) { 
      this.selectedcatByID = this.activatedRouter.snapshot.params['catID'];
      this.router.routeReuseStrategy.shouldReuseRoute = function(){
        return false;
     }

     this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
           // trick the Router into believing it's last link wasn't previously loaded
           this.router.navigated = false;
           // if you need to scroll back to top, here is the right place
          
        }
    });
    }

  ngOnInit() {
    this.selectedcatByID = this.activatedRouter.snapshot.params['catID'];
    this.catfrmApi.getProductByCategoryID(this.selectedcatByID).subscribe(cat=>{this.prdctList=cat},
      (err)=>{
      console.log(err);
    });
    console.log("cat ID : "+this.selectedcatByID+"products : "+this.prdctList);
   console.log("ngOnInit");
  }
  


 


}
