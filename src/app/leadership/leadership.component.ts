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
      skills: 'a',
      descriptionPoints: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan ligula ut mi vehicula, in pulvinar orci.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan ligula ut mi vehicula, in pulvinar orci.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan ligula ut mi vehicula, in pulvinar orci.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan ligula ut mi vehicula, in pulvinar orci.',
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
