import { logging } from 'protractor';

import { Injectable } from '@angular/core';
import { AppUserAuth } from './app-user-auth';
import { AppUser } from './app-user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  securityObject:AppUserAuth=new AppUserAuth();
  constructor() { }
resetSecurityObject():void{
this.securityObject.userName="";
this.securityObject.bearerToken="";
this.securityObject.canAccessCategories=false;
this.securityObject.canAccessProducts=false;
this.securityObject.canAddCategory=false;
this.securityObject.canAddProduct=false;
this.securityObject.canSaveProduct=false;
this.securityObject.isAuthenticated=false;
}


login(entity:AppUser):Observable<AppUserAuth>
{
  this.resetSecurityObject();
return ;
}

logout(){
  this.resetSecurityObject();
}



}
 
