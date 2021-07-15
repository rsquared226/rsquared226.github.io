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
      fontFamily="'Trebuchet MS', Helvetica, sans-serif"
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
      title: 'Javascript',
      skillLevel: SkillLevel.Proficient,
    },
    {
      title: 'HTML/CSS',
      skillLevel: SkillLevel.Proficient,
    },
    {
      title: 'Flutter',
      skillLevel: SkillLevel.Proficient,
    },
    {
      title: 'Robotics',
      skillLevel: SkillLevel.Proficient,
    },
    {
      title: 'Git/GitHub',
      skillLevel: SkillLevel.Proficient,
    },
    {
      title: 'React (Native)',
      skillLevel: SkillLevel.Proficient,
    },
    {
      title: 'Python',
      skillLevel: SkillLevel.Familiar,
    },
    {
      title: 'C/C++',
      skillLevel: SkillLevel.Familiar,
    },
    {
      title: 'Jest Testing',
      skillLevel: SkillLevel.Familiar,
    },
    {
      title: 'SQLite',
      skillLevel: SkillLevel.Familiar,
    },
    {
      title: 'Angular',
      skillLevel: SkillLevel.Familiar,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
