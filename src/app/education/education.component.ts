import { Component, OnInit } from '@angular/core';
import { InfoCardDetails } from '../info-card/info-card.component';

@Component({
  selector: 'app-education',
  template: `
    <app-portfolio-section
      sectionName="Education"
      fontFamily=""
      bulmaColor="is-success"
      [infoCardsDetails]="infoCardDetails"
    ></app-portfolio-section>
  `,
  styles: [],
})
export class EducationComponent implements OnInit {
  readonly infoCardDetails: InfoCardDetails[] = [
    {
      imageUrl: '/assets/images/psu.png',
      title: 'Penn State University',
      role: 'GPA: 3.97',
      dates: 'Graduation: May 2023',
      descriptionPoints: [
        'Computer Science Major',
        'Smeal College Business Certificate',
        "Dean's List (3/3 semesters)",
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
