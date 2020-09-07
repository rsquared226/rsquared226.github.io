import { Component, OnInit, Input } from '@angular/core';

export enum SkillLevel {
  Learning = 'Learning',
  Familiar = 'Familiar',
  Proficient = 'Proficient',
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
  @Input() skillCardDetails: SkillCardDetails;

  // TODO: Add different colors for skill levels.

  constructor() {}

  ngOnInit(): void {}

  getSkillLevelColor(level: SkillLevel): string {
    switch (level) {
      case 'Proficient':
        return '#3273dc';
      case 'Familiar':
        return '#19A2C7';
      case 'Learning':
        return '#00d1b2';
    }
  }
}
