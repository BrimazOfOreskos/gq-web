import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolygonManagementComponent } from './polygon-management.component';



@NgModule({
  declarations: [
    PolygonManagementComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PolygonManagementComponent
  ]
})
export class PolygonManagementModule { }
