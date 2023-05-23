import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './modules/routing/routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HousesComponent } from './components/houses/houses.component';
import { AboutUsEntryComponent } from './components/about-us-entry/about-us-entry.component';
import { HouseCardComponent } from './components/house-card/house-card.component';

import { BlogComponent } from './components/blog/blog.component';
import { BlogArticleComponent } from './components/blog-article/blog-article.component';
import { ImgComponent } from './components/img/img.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingRouteComponent } from './components/landing-route/landing-route.component';
import { AboutUsRouteComponent } from './components/about-us-route/about-us-route.component';
import { HousesRouteComponent } from './components/houses-route/houses-route.component';
import { BlogRouteComponent } from './components/blog-route/blog-route.component';
import { ContactRouteComponent } from './components/contact-route/contact-route.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    HousesComponent,
    AboutUsEntryComponent,
    HouseCardComponent,
    BlogComponent,
    BlogArticleComponent,
    ImgComponent,
    FooterComponent,
    LandingRouteComponent,
    AboutUsRouteComponent,
    HousesRouteComponent,
    BlogRouteComponent,
    ContactRouteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
