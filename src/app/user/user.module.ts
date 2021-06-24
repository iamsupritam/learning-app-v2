import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserRegistrationComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule, 
    UserRoutingModule,
  ]
})
export class UserModule { }
