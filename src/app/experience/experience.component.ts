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
    {
      title: 'FIRST Tech Challenge',
      role: 'Software Lead',
      dates: 'June 2017 - May 2019',
      descriptionPoints: [
        'Led team of 6 developers to program the robot to compete in competitions',
        'Taught new members the basics of Java and Android Studio',
        'Assigned tasks to members using Basecamp and used GitHub to manage the code',
      ],
      generalLink: 'http://www.pacar-robotics.org/',
      generalLinkName: 'Website',
      generalFaIcon: 'fas fa-desktop',
      githubLink: 'https://github.com/pacar-robotics',
    },
    {
      title: 'Technology Student Association',
      role: 'Chapter President, Secretary',
      dates: 'August 2017 - May 2019',
      descriptionPoints: [
        'Led the school chapter to ensure all 96 members knew how to register and compete effectively in their events',
        'Raised over $500 for the club by marketing Little Debbie’s treats to the school',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
