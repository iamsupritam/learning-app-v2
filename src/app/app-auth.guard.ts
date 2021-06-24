import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoginService } from './app-services/user-login.service';

@Injectable({
  providedIn: 'root'
})
export class AppAuthGuard implements CanActivate {
  constructor(private userLoginService: UserLoginService, private router: Router){}
  canActivate(): boolean {
    if(!this.userLoginService.ValidaeUser()){
      this.router.navigateByUrl("/user/login");
    }
    return this.userLoginService.ValidaeUser();
  }
  
}
