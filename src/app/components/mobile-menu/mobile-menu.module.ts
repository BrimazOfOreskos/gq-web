import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileMenuCloseButtonModule } from '@components/mobile-menu-close-button/mobile-menu-close-button.module';
import { MobileMenuLinkModule } from '@components/mobile-menu-link/mobile-menu-link.module';
import { MobileMenuComponent } from './mobile-menu.component';

@NgModule({
  declarations: [
    MobileMenuComponent
  ],
  imports: [
    CommonModule,
    MobileMenuCloseButtonModule,
    MobileMenuLinkModule
  ],
  exports: [
    MobileMenuComponent
  ]
})
export class MobileMenuModule { }
