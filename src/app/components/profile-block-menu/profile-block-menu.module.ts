import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileBlockMenuLinkModule } from '@components/profile-block-menu-link/profile-block-menu-link.module';
import { ProfileBlockMenuComponent } from './profile-block-menu.component';

@NgModule({
  declarations: [
    ProfileBlockMenuComponent
  ],
  imports: [
    CommonModule,
    ProfileBlockMenuLinkModule
  ],
  exports: [
    ProfileBlockMenuComponent
  ]
})
export class ProfileBlockMenuModule { }
