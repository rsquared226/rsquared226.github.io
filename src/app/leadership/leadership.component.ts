import { Component, OnInit } from '@angular/core';
import { InfoCardDetails } from '../info-card/info-card.component';

@Component({
  selector: 'app-leadership',
  template: `
    <app-portfolio-section
      sectionName="LEADERSHIP"
      fontFamily="sans-serif"
      bulmaColor="is-warning"
      [infoCardsDetails]="infoCardDetails"
    ></app-portfolio-section>
  `,
  styles: [],
})
export class LeadershipComponent implements OnInit {
  readonly infoCardDetails: InfoCardDetails[] = [
    {
      imageUrl: '/assets/images/HackPSU.jpg',
      title: 'HackPSU',
      role: 'Tech Director',
      dates: 'August 2019 - Current',
      descriptionPoints: [
        'Manage a team of 15 to develop and maintain an entire technology stack to allow 1000+ hackathon participants to create profiles, register for the event, and find relevant information',
        'Delegate information using the Agile methodology in conjunction with Asana',
      ],
      generalLink: 'https://hackpsu.org/',
      generalLinkName: 'Website',
      generalFaIcon: 'fas fa-desktop',
      githubLink: 'https://github.com/Hack-PSU',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
