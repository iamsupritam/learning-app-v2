import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdTableComponent } from './sd-table/sd-table.component';
import { CustomSortPipe } from '../app-pipes/app-pipes/custom-sort.pipe';
import { AppPipesModule } from '../app-pipes/app-pipes.module';



@NgModule({
  declarations: [
    SdTableComponent
  ],
  imports: [
    CommonModule,
    AppPipesModule
  ],
  exports: [SdTableComponent]
})
export class SdModuleModule { }
