import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Product } from '../Shared/product';

@Injectable({
  providedIn: 'root'
})
export class StoaregeCartService {
  STORAGE_KEY = 'cart';
  constructor(@Inject(LOCAL_STORAGE)private storage: StorageService) {}
  public setStoreOnLocalStorage(pro:Product): void {
    const currentTodoList = this.storage.get(this.STORAGE_KEY) || [];
    currentTodoList.push(pro);
    this.storage.set(this.STORAGE_KEY, currentTodoList);
    //console.log(this.storage.get(this.STORAGE_KEY) || 'LocaL storage is empty');
  }
  public changeStoreOnLocalStorage(pro:Product[]): void 
  { 
    this.storage.remove(this.STORAGE_KEY);
    this.storage.set(this.STORAGE_KEY, pro);
  }
  
}

