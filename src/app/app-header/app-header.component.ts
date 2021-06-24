import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../app-services/user-login.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  @Output() sideNavToggledEvent: EventEmitter<any> = new EventEmitter();

  constructor(public authService: UserLoginService, private router: Router) { } 

  ngOnInit(): void {
  }

  logoutApp(): void {
    this.authService.isAuthenticated = false;
    localStorage.clear();
    this.router.navigateByUrl('/user/login');
  }

  sideNavToggled(){
    this.sideNavToggledEvent.emit();
  }

}
