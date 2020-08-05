import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroHeroComponent } from './intro-hero/intro-hero.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, IntroHeroComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
