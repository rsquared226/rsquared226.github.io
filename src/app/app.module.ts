import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroHeroComponent } from './intro-hero/intro-hero.component';
import { FooterComponent } from './footer/footer.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { LinkButtonComponent } from './info-card/link-button/link-button.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, IntroHeroComponent, FooterComponent, LeadershipComponent, InfoCardComponent, LinkButtonComponent, PortfolioSectionComponent, ExperienceComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
