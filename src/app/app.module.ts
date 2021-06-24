import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSidenavComponent } from './app-sidenav/app-sidenav.component';
import { AngularMaterialModule } from './angular-material.module';
import { UserLoginService } from './app-services/user-login.service';
import { SdModuleModule } from './site-controls/sd-module.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppSidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HomeModule,
    UserModule

  ],
  providers: [UserLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
