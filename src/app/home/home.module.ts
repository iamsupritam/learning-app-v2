import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { SdModuleModule } from '../site-controls/sd-module.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeRoutingModule,
    SdModuleModule
  ]
})
export class HomeModule { }
