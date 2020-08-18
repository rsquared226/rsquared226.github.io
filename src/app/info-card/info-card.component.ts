import { Component, OnInit, Input } from '@angular/core';

export interface InfoCardDetails {
  readonly imageUrl?: string;
  readonly title: string;
  // TODO: implement role
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

  constructor() {}

  ngOnInit(): void {}
}
