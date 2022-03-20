import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileMenuOpenButtonModule } from '@components/mobile-menu-open-button/mobile-menu-open-button.module';
import { ProfileBlockModule } from '@components/profile-block/profile-block.module';
import { SearchBarComponent } from './search-bar.component';

@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    MobileMenuOpenButtonModule,
    ProfileBlockModule
  ],
  exports: [
    SearchBarComponent
  ]
})
export class SearchBarModule { }
