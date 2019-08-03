import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Category } from 'src/app/shared/category';
import { Router, NavigationEnd } from '@angular/router';
import { CategoryFromApiService } from 'src/app/Services/category-from-api.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit,OnChanges {
  
  listCategories:Category[];
  constructor(private catServiceFromAPI:CategoryFromApiService,
    private router:Router) { 
      this.router.routeReuseStrategy.shouldReuseRoute= function(){
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
    this.catServiceFromAPI.getAllCategories()
    .subscribe((res)=>{
      this.listCategories= res;
    },(err)=>{
      console.log(err);
    });
  
  }
  ngOnChanges(changes:SimpleChanges): void {
     this.catServiceFromAPI.getAllCategories()
    .subscribe((res)=>{
      this.listCategories= res;
    },(err)=>{
      console.log(err);
    });
                                                

}
}
