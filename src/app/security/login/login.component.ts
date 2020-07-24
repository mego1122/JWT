import { AppUserAuth } from './../app-user-auth';

import { SecurityService } from './../security.service';
import { Component, OnInit } from '@angular/core';
import { AppUser} from '../app-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:AppUser=new AppUser();
  securityObject:AppUserAuth=null;

  constructor(private SecurityService:SecurityService) { }

  ngOnInit(): void {
  }

login(){
this.SecurityService.login(this.user).subscribe(resp=>
  this.securityObject=resp);
}

}
