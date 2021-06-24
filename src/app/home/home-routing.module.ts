import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAuthGuard } from '../app-auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'home',
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AppAuthGuard] },
      { path: 'product', component: ProductComponent, canActivate: [AppAuthGuard] }
    ],
    canActivate: [AppAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
