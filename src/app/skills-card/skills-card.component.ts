import { Component, OnInit, Input } from '@angular/core';

enum SkillLevel {
  Learning,
  Familiar,
  Proficient,
}

export interface SkillCardDetails {
  readonly title: string;
  readonly skillLevel: SkillLevel;
}

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.css'],
})
export class SkillsCardComponent implements OnInit {
  @Input() infoCardDetails: SkillCardDetails;

  constructor() {}

  ngOnInit(): void {}
}
