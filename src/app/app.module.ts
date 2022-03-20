import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SidebarModule } from '@components';
import { ExploreModule, PageNotFoundModule, PolygonManagementModule } from '@views';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExploreModule,
    SidebarModule,
    PageNotFoundModule,
    PolygonManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
