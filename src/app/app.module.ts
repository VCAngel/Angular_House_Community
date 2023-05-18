import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HousesComponent } from './components/houses/houses.component';
import { AboutUsEntryComponent } from './components/about-us-entry/about-us-entry.component';
import { HouseCardComponent } from './components/house-card/house-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    HousesComponent,
    AboutUsEntryComponent,
    HouseCardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
