import { Injectable, Inject } from '@angular/core';
import { Admin } from '../shared/admin';
import { SESSION_STORAGE, StorageService, LOCAL_STORAGE } from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { AdminFromApiService } from './admin-from-api.service';

@Injectable({
  providedIn: 'root'
})
export class StorageAdminService {

  STORAGE_Admin = 'admin';
  constructor(@Inject(LOCAL_STORAGE)private storage: StorageService) { }

  public setCustomerOnStorage (admin :Admin):void
  {
    const currentAdmin = this.storage.get(this.STORAGE_Admin) || [];
    currentAdmin.push(admin);
    this.storage.set(this.STORAGE_Admin, admin);
    console.log(this.storage.get(this.STORAGE_Admin) || 'LocaL storage is empty');
  }
  public getCustomerFromStorage():Admin
  {
    return this.storage.get(this.STORAGE_Admin);
  }
  public removeStorage()
  {
    this.storage.remove;
  }
}