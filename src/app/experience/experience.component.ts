import { Component, OnInit } from '@angular/core';
import { InfoCardDetails } from '../info-card/info-card.component';

@Component({
  selector: 'app-experience',
  template: `
    <app-portfolio-section
      sectionName="Experience"
      fontFamily="consolas, monospace"
      bulmaColor="is-link"
      [infoCardsDetails]="infoCardDetails"
    ></app-portfolio-section>
  `,
  styles: [],
})
export class ExperienceComponent implements OnInit {
  readonly infoCardDetails: InfoCardDetails[] = [
    {
      imageUrl: '/assets/images/budgetmylife.jpg',
      title: 'Budget My Life',
      dates: 'May 2020 - Current',
      descriptionPoints: [
        'Designed, coded, and deployed a beautiful and intuitive budgeting application using Flutter',
        'Summer personal project with 250+ hours invested',
        'Enable the user to track transactions and view insights on how they spend/earn their money',
        '200+ installs',
      ],
      generalLink:
        'https://play.google.com/store/apps/details?id=rsquared226.budget_my_life',
      generalLinkName: 'Play Store',
      generalFaIcon: 'fab fa-google-play',
      githubLink: 'https://github.com/rsquared226/budget_my_life',
      skills: 'Flutter, Dart, SQLite, CI/CD, Figma, Mobile app dev',
    },
    {
      imageUrl: '/assets/images/HackPSU.jpg',
      title: 'HackPSU Mobile App',
      dates: 'Oct 2019 - Current',
      descriptionPoints: [
        'Designing and building HackPSU’s first mobile app using React Native',
        'Allow 1000+ users to query backend database to get user data',
      ],
      githubLink: 'https://github.com/Hack-PSU/frontend-app/',
      skills: 'React Native, Typescript, Figma, Mobile app dev',
    },
    {
      imageUrl: '/assets/images/websitepreview.jpg',
      title: 'Personal Portfolio',
      dates: 'July 2020 - Current',
      descriptionPoints: [
        'This website! One of my summer personal projects',
        'Designed and coded this portfolio using Angular and Bulma',
        "Utilize Angular's object-oriented values to prevent repeated code in HTML by using components for elements such as info cards",
      ],
      skills:
        'Angular, Typescript, HTML, CSS, Bulma, Figma, GitHub Pages, Google Domains',
      generalLink: 'https://rahulramkumar.dev/',
      generalLinkName: 'Website',
      generalFaIcon: 'fas fa-desktop',
      githubLink: 'https://github.com/rsquared226/rsquared226.github.io',
    },
    {
      imageUrl: '/assets/images/ftcexperience.jpg',
      title: 'FIRST Tech Challenge',
      dates: 'May 2014 - May 2019',
      descriptionPoints: [
        'Worked with a team of 15 people to build and program a robot to compete in competitions',
        'Designed and implemented software for the robot using Java in Android Studio and utilized TensorFlow to autonomously identify balls and blocks on the playing field',
        'Overall winners (5 times), best robot performance (6), smartest programming award (4), and other awards',
      ],
      skills: 'Robotics, Java, Android Studio, C/C++, GitHub',
      generalLink: 'http://www.pacar-robotics.org/',
      generalLinkName: 'Website',
      generalFaIcon: 'fas fa-desktop',
      githubLink: 'https://github.com/pacar-robotics',
    },
    {
      imageUrl: '/assets/images/tsaexperience.jpg',
      title: 'Technology Student Association',
      dates: 'Sept 2016 - May 2019',
      descriptionPoints: [
        'States Coding, 5th place',
        'States Tech Bowl, 5th place',
        'States Video Game Design, 10th place',
        'States Computer Systems Troubleshooting, 10th place',
        'Other awards dedicated to video production',
      ],
      skills: 'Java, C#, General computer knowledge',
      generalLink: 'https://www.instagram.com/cvhstsa/',
      generalLinkName: 'Social',
      generalFaIcon: 'fab fa-instagram',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
