import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExploreComponent, PageNotFoundComponent, PolygonManagementComponent, ProfileComponent, SettingsComponent } from '@views';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/explore' },
  { path: 'explore', pathMatch: 'full', component: ExploreComponent },
  { path: 'explore/:zoom/:lat/:lng', component: ExploreComponent },
  { path: 'polygons', component: PolygonManagementComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
