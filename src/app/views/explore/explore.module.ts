import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapModule } from '@components';
import { ExploreComponent } from './explore.component';

@NgModule({
  declarations: [
    ExploreComponent
  ],
  imports: [
    CommonModule,
    MapModule
  ],
  exports: [
    ExploreComponent
  ]
})
export class ExploreModule { }
