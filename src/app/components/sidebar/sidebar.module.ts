import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarLinkModule } from '@components/sidebar-link/sidebar-link.module';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SidebarLinkModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
