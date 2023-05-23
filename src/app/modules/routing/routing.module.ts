import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LandingRouteComponent } from 'src/app/components/landing-route/landing-route.component';
import { AboutUsRouteComponent } from 'src/app/components/about-us-route/about-us-route.component';
import { HousesRouteComponent } from 'src/app/components/houses-route/houses-route.component';
import { BlogRouteComponent } from 'src/app/components/blog-route/blog-route.component';
import { ContactRouteComponent } from 'src/app/components/contact-route/contact-route.component';

const routes: Routes = [
  { path: '', component: LandingRouteComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'about', component: AboutUsRouteComponent },
  { path: 'houses', component: HousesRouteComponent },
  { path: 'blog', component: BlogRouteComponent },
  { path: 'contact', component: ContactRouteComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
