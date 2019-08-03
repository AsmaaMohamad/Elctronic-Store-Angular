import { Component, OnInit } from '@angular/core';
import { AdminFromApiService } from 'src/app/Services/admin-from-api.service';
import { Admin } from 'src/app/shared/admin';
import { Router } from '@angular/router';
import { StorageAdminService } from 'src/app/Services/storage-admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  result:Admin;
  error:string;
 
  constructor(private adminStorage:StorageAdminService,
    private adminService:AdminFromApiService,
    private router:Router) {
    this.username="";
    this.password="";
    this.error="";
  }
  
  login()
  {
    console.log("asd1");
    this.adminService.CheckAdmin(this.username,this.password)
    .subscribe((res)=>{
      console.log("asd");
      this.result = res;
      console.log(`/Admin ${JSON.stringify(this.result)}`);
      this.router.navigate(["/Admin"]);

      if(this.result !=null)
    {
      this.adminStorage.setCustomerOnStorage(this.result);
       this.router.navigate(["/Admin"]);

    }
    else
    {
      this.error = "Username is incorrecr, Please try again";
    }
    },(err)=>{console.log(err)});
  }
  ngOnInit() {
  }
  
  }
