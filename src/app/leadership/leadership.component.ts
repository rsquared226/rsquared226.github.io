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
      dates: 'January 2020 - Current',
      descriptionPoints: [
        'Manage a team of 15 to develop and maintain an entire technology stack to allow 1000+ hackathon participants to create profiles, register for the event, and find relevant information',
        'Delegate information using the Agile methodology in conjunction with Asana',
      ],
      generalLink: 'https://hackpsu.org/',
      generalLinkName: 'Website',
      generalFaIcon: 'fas fa-desktop',
      githubLink: 'https://github.com/Hack-PSU',
    },
    {
      imageUrl: '/assets/images/unicef.jpg',
      title: 'UNICEF',
      role: 'Treasurer, Fundraising Chair',
      dates: 'January 2020 - Current',
      descriptionPoints: [
        'Responsible for the club budget and sent proceeds from fundraisers to UNICEF',
        'Communicated with 4 businesses for fundraisers (raised $900+) and for organizing volunteering events',
        'Worked together with the officer team of 8 to research and present current world issues to 150+ club members',
      ],
      generalLink: 'https://www.instagram.com/unicefpennstate/',
      generalLinkName: 'Social',
      generalFaIcon: 'fab fa-instagram',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
