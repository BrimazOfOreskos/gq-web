import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExploreComponent, PageNotFoundComponent, PolygonManagementComponent } from '@views';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/explore' },
  { path: 'explore', component: ExploreComponent },
  { path: 'polygons', component: PolygonManagementComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
