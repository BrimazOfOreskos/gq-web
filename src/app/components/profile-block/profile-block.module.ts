import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileBlockMenuModule } from '@components/profile-block-menu/profile-block-menu.module';
import { ProfileBlockComponent } from './profile-block.component';

@NgModule({
  declarations: [
    ProfileBlockComponent
  ],
  imports: [
    CommonModule,
    ProfileBlockMenuModule
  ],
  exports: [
    ProfileBlockComponent
  ]
})
export class ProfileBlockModule { }
