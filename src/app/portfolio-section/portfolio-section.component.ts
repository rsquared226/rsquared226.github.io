import { Component, OnInit, Input } from '@angular/core';
import { InfoCardDetails } from '../info-card/info-card.component';

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
