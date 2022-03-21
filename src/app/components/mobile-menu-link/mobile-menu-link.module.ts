import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MobileMenuLinkComponent } from './mobile-menu-link.component';

@NgModule({
  declarations: [
    MobileMenuLinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MobileMenuLinkComponent
  ]
})
export class MobileMenuLinkModule { }
