import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarLinkComponent } from './sidebar-link.component';

@NgModule({
  declarations: [
    SidebarLinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarLinkComponent
  ]
})
export class SidebarLinkModule { }
