import { Component, OnInit } from '@angular/core';
import { InfoCardDetails } from '../info-card/info-card.component';

@Component({
  selector: 'app-experience',
  template: `
    <app-portfolio-section
      sectionName="Experience"
      fontFamily="consolas, monospace"
      bulmaColor="is-link"
      [infoCardsDetails]="infoCardDetails"
    ></app-portfolio-section>
  `,
  styles: [],
})
export class ExperienceComponent implements OnInit {
  readonly infoCardDetails: InfoCardDetails[] = [
    {
      imageUrl: '/assets/images/budgetmylife.jpg',
      title: 'Budget My Life',
      dates: 'May 2020 - Current',
      descriptionPoints: [
        'Designed, coded, and deployed a beautiful and intuitive budgeting application using Flutter',
        'Enable the user to track transactions and view insights on how they spend/earn their money',
        '200+ installs',
      ],
      generalLink:
        'https://play.google.com/store/apps/details?id=rsquared226.budget_my_life',
      generalLinkName: 'Play Store',
      generalFaIcon: 'fab fa-google-play',
      githubLink: 'https://github.com/rsquared226/budget_my_life',
      skills: 'Flutter, SQLite, CI/CD, Dart, Figma, Mobile app development',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
