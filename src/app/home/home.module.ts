import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { SdModuleModule } from '../site-controls/sd-module.module';
import { CustomSortPipe } from '../app-pipes/app-pipes/custom-sort.pipe';
import { AppPipesModule } from '../app-pipes/app-pipes.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeRoutingModule,
    SdModuleModule,
    AppPipesModule
  ]
})
export class HomeModule { }
