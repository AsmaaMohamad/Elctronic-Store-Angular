import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/category';
import { Product } from 'src/app/shared/product';
import { ProductFromApiService } from 'src/app/Services/product-from-api.service';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  newProduct:Product;
  ListOfCategory:Category[];
   //productFrom: FormGroup;
  imageUrl: string = "/assets/img/lap1.jpeg";
  fileToUpload: File = null;

  constructor(private productServiceAPI: ProductFromApiService
    , private router: Router,
      private service:ProductServiceService,
      ) {
      this.newProduct = new Product();
      this.ListOfCategory=[];
     }

   handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  UploadFile()
  {
    this.service.postFile(this.fileToUpload).subscribe(data=>{},err=>{});
  }
  resetform()
  {
    console.log("reset");
    this.newProduct=new Product();
  }
  SaveProduct()
  {
    this.service.postFile(this.fileToUpload).subscribe(data=>{
    this.newProduct.Image=this.fileToUpload.name;    
    console.log(JSON.stringify(this.newProduct));

    this.productServiceAPI.insertProduct(this.newProduct)
    .subscribe((data)=>
    {
      
      this.resetform();
      // this.imageUrl = "/assets/img/default-image.png";
    },
    (err)=>{console.log(err)} 
    );
  });
    // this.router.navigate(['/Products']);
  }
  
  ngOnInit() {
    this.productServiceAPI.getAllCategories()
    .subscribe(
      (res)=>{
        console.log(res);
        this.ListOfCategory = res;
      },
      (err)=>{console.log(err);});
      console.log(`this categories list ${this.ListOfCategory}`);


  
  }
 
}