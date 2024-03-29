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
      dates: 'May 2020 - Current',
      descriptionPoints: [
        'Manage a team of 9 to develop and maintain an entire technology stack (Linux, Node.js, MySQL, JavaScript) to allow 1000+ hackathon participants to create profiles, register for the event, and find relevant information',
        'Delegate information using the Agile methodology in conjunction with Todoist (Kanban boards)',
      ],
      generalLink: 'https://hackpsu.org/',
      generalLinkName: 'Website',
      generalFaIcon: 'fas fa-desktop',
      githubLink: 'https://github.com/Hack-PSU',
    },
    {
      imageUrl: '/assets/images/unicef.jpg',
      title: 'UNICEF PSU',
      role: 'Treasurer',
      dates: 'Jan 2020 - Dec 2020',
      descriptionPoints: [
        'Manage the club budget (~$900) and send proceeds from fundraisers to UNICEF',
        'Communicate with local businesses for fundraisers and for organizing volunteering events',
        'Collaborate with the officer team of 6 to research and present current world issues to 200+ club members',
      ],
      generalLink: 'https://www.instagram.com/unicefpennstate/',
      generalLinkName: 'Social',
      generalFaIcon: 'fab fa-instagram',
    },
    {
      imageUrl: '/assets/images/ftcleader.png',
      title: 'FIRST Tech Challenge',
      role: 'Software Lead',
      dates: 'Jun 2017 - May 2019',
      descriptionPoints: [
        'Led team of 6 developers to program the robot to compete in competitions',
        'Taught new members the basics of Java and Android Studio',
        'Assigned tasks to members using Basecamp and used GitHub to manage the code',
        'Organized and presented software lessons in our annual robotics camps',
      ],
      generalLink: 'http://www.pacar-robotics.org/',
      generalLinkName: 'Website',
      generalFaIcon: 'fas fa-desktop',
      githubLink: 'https://github.com/pacar-robotics',
    },
    {
      imageUrl: '/assets/images/tsa.png',
      title: 'Technology Student Association',
      role: 'President',
      dates: 'Aug 2017 - May 2019',
      descriptionPoints: [
        'Led the school chapter to ensure all 96 members knew how to register and compete effectively in their events',
        'Raised over $500 for the club by marketing Little Debbie’s treats to the school',
      ],
      generalLink: 'https://www.instagram.com/cvhstsa/',
      generalLinkName: 'Social',
      generalFaIcon: 'fab fa-instagram',
    },
    {
      imageUrl: '/assets/images/unicef.jpg',
      title: 'CV UNICEF',
      role: 'Treasurer',
      dates: 'Aug 2018 - May 2019',
      descriptionPoints: [
        'Responsible for the club budget (~$150) and sent proceeds from fundraisers to UNICEF',
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
