import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';

import { MobileMenuModule, SearchBarModule, SidebarModule } from '@components';
import { mobileMenuReducer } from '@components/mobile-menu/mobile-menu.reducer';
import { profileBlockMenuReducer } from '@components/profile-block-menu/profile-block-menu.reducer';
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
    StoreModule.forRoot({
      mobileMenu: mobileMenuReducer,
      profileBlockMenu: profileBlockMenuReducer
    }),
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
