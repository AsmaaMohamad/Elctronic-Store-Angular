import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product';
import { Category } from 'src/app/shared/category';
import { ProductFromApiService } from 'src/app/Services/product-from-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  selectedProduct: Product;
  HasOffer:string;
  ListOfCategory:Category[];

  constructor(private productServiceAPI:ProductFromApiService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { 
      this.selectedProduct= new Product();

  }
  SaveChanges(pid:number,selectedPro:Product){
    this.productServiceAPI.updateProduct(pid,selectedPro)
    .subscribe((res)=>{
      console.log(JSON.stringify(this.selectedProduct));
      this.router.navigate(['/Products']);
    },(err)=>{
      console.log(err);
    });
    
  }
  ngOnChanges()
  {
   if(this.selectedProduct.Offer==1)
   {
    this.HasOffer = "This Product has a offer" ;
   }
   console.log(this.HasOffer); 
  }

  ngOnInit() {
    const selectedProductByID = this.activatedRoute.snapshot.params['pid'];
    this.productServiceAPI.getProductByID(selectedProductByID)
    .subscribe(
      (res)=>{
        console.log(res);
        this.selectedProduct = res;
      },
      (err)=>{console.log(err);});
    this.productServiceAPI.getAllCategories()
      .subscribe(
        (res)=>{
          console.log(res);
          this.ListOfCategory = res;
        },
        (err)=>{console.log(err);});
  }

}
