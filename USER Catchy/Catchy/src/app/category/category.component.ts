import { Component, OnInit } from '@angular/core';
import { Category } from '../Shared/category';
import { CategoryapiService } from '../services/categoryapi.service';
import {LocalStorageService,SessionStorageService,LocalStorage,SessionStorage} from 'angular-web-storage'
import { Product } from '../Shared/product';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  prdctList:Product[]; 
catList:Category[];
catID:number;
num:number;
cart:string;
selectedcatByID:number;
 
  constructor(public storage:LocalStorageService,private catfrmApi:CategoryapiService
   , private activatedRoute:ActivatedRoute) { 
   // this.cart= JSON.parse(this.storage.get('num1')) ;
   this.catID; 
  }

  ngOnInit() {
    
      this.catfrmApi.getCategory().subscribe((cat)=>{
        this.catList=cat;
    },(err)=>{
      console.log(err);
    });
     this.selectedcatByID = this.activatedRoute.snapshot.params['catID'];
    this.catfrmApi.getProductByCategoryID(this.selectedcatByID).subscribe(cat=>{this.prdctList=cat},
      (err)=>{
      console.log(err);
    });
    console.log("cat ID : "+this.selectedcatByID+"products : "+this.prdctList);
  }

}
