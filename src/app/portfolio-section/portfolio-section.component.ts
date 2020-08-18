import { Component, OnInit, Input } from '@angular/core';

export interface InfoCardDetails {
  readonly imageUrl?: string;
  readonly title: string;
  readonly role?: string;
  readonly description?: string;
  readonly skills?: string;
  readonly githubLink?: string;
  readonly generalLink?: string;
  readonly generalLinkName?: string;
  readonly generalFaIcon?: string;
}
@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.css'],
})
export class PortfolioSectionComponent implements OnInit {
  @Input() sectionName: string;
  @Input() bulmaColor: string;
  @Input() infoCardsDetails: InfoCardDetails[];

  constructor() {}

  ngOnInit(): void {}

  firstColData(): InfoCardDetails[] {
    return this.infoCardsDetails.filter((_, index) => index % 2 === 0);
  }

  secondColData(): InfoCardDetails[] {
    return this.infoCardsDetails.filter((_, index) => index % 2 !== 0);
  }
}
