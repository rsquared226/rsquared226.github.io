import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroHeroComponent } from './intro-hero/intro-hero.component';
import { FooterComponent } from './footer/footer.component';
import { LeadershipComponent } from './leadership/leadership.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, IntroHeroComponent, FooterComponent, LeadershipComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
