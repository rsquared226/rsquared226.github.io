import { Component, OnInit, Input } from '@angular/core';

export interface InfoCardDetails {
  readonly imageUrl?: string;
  readonly title: string;
  readonly dates?: string;
  readonly role?: string;
  readonly description?: string;
  readonly skills?: string;
  readonly githubLink?: string;
  readonly generalLink?: string;
  readonly generalLinkName?: string;
  readonly generalFaIcon?: string;
}

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css'],
})
export class InfoCardComponent implements OnInit {
  @Input() infoCardDetails: InfoCardDetails;

  isDescriptionTruncated: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggleDescriptionTruncation(): void {
    this.isDescriptionTruncated = !this.isDescriptionTruncated;
  }
}
