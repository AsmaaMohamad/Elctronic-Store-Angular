import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/category';
import { CategoryFromApiService } from 'src/app/Services/category-from-api.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  newCategory:Category;
  
  constructor(private catServiceFromAPI:CategoryFromApiService,
    private router:Router) { 
      this.newCategory=new Category();
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

  saveCategory()
  {
    console.log(JSON.stringify(this.newCategory));
    this.catServiceFromAPI.insertCategory(this.newCategory)
    .subscribe((data)=>{console.log (JSON.stringify(data));},
    (err)=>{console.log(err)});

    this.router.navigate(['/allCategories']);
  }


  ngOnInit() {
  }

}
