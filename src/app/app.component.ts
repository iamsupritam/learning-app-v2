import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from './app-services/user-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() isOpened: boolean = false;
  @Input() isAuthenticated: boolean = false;
  constructor(public authservice: UserLoginService, private router: Router) {

  }

  ngOnInit(): void {
    if(window.location.pathname === "/user/login"){
      this.authservice.isAuthenticated = false;
    }
    
  }

  sideNavMenuClick(isOpened: boolean) {
    this.isOpened = !this.isOpened;
  }
}
