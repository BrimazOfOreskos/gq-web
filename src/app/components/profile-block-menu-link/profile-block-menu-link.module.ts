import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProfileBlockMenuLinkComponent } from './profile-block-menu-link.component';

@NgModule({
  declarations: [
    ProfileBlockMenuLinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProfileBlockMenuLinkComponent
  ]
})
export class ProfileBlockMenuLinkModule { }
