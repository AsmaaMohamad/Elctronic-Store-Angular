import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Product } from '../Shared/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class CartComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE)private storage: StorageService) { }
  cart:Product[]=[];

  ngOnInit() {
   
 this.cart= JSON.parse(localStorage.getItem("product"));
 console.log( this.cart);
  }

}
