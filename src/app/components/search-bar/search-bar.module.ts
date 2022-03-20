import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileBlockModule } from '@components/profile-block/profile-block.module';
import { SearchBarComponent } from './search-bar.component';

@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    ProfileBlockModule
  ],
  exports: [
    SearchBarComponent
  ]
})
export class SearchBarModule { }
