import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MobileMenuModule, SearchBarModule, SidebarModule } from '@components';
import { ExploreModule, PageNotFoundModule, PolygonManagementModule, ProfileModule, SettingsModule } from '@views';
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
    MobileMenuModule,
    PageNotFoundModule,
    PolygonManagementModule,
    ProfileModule,
    SearchBarModule,
    SettingsModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
