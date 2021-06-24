import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdTableComponent } from './sd-table/sd-table.component';



@NgModule({
  declarations: [
    SdTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SdTableComponent]
})
export class SdModuleModule { }
