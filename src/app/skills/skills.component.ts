import { Component, OnInit } from '@angular/core';
import {
  SkillCardDetails,
  SkillLevel,
} from '../skills-card/skills-card.component';

@Component({
  selector: 'app-skills',
  template: `
    <app-portfolio-section
      sectionName="Skills"
      fontFamily=""
      bulmaColor="is-dark"
      [skillCardsDetails]="skillCardDetails"
    ></app-portfolio-section>
  `,
  styles: [],
})
export class SkillsComponent implements OnInit {
  readonly skillCardDetails: SkillCardDetails[] = [
    {
      title: 'Java',
      skillLevel: SkillLevel.Proficient,
    },
    {
      title: 'Flutter',
      skillLevel: SkillLevel.Proficient,
    },
    {
      title: 'Angular',
      skillLevel: SkillLevel.Familiar,
    },
    {
      title: 'Java',
      skillLevel: SkillLevel.Proficient,
    },
    {
      title: 'Flutter',
      skillLevel: SkillLevel.Proficient,
    },
    {
      title: 'Angular',
      skillLevel: SkillLevel.Familiar,
    },
    {
      title: 'Java',
      skillLevel: SkillLevel.Proficient,
    },
    {
      title: 'Flutter',
      skillLevel: SkillLevel.Proficient,
    },
    {
      title: 'Angular',
      skillLevel: SkillLevel.Familiar,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
