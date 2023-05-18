import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HousesComponent } from './components/houses/houses.component';
import { AboutUsEntryComponent } from './components/about-us-entry/about-us-entry.component';
import { HouseCardComponent } from './components/house-card/house-card.component';

import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './components/blog/blog.component';
import { BlogArticleComponent } from './components/blog-article/blog-article.component';
import { ImgComponent } from './components/img/img.component';
import { FooterComponent } from './components/footer/footer.component';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
