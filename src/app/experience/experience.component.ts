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
      imageUrl: '/assets/images/jpmorganchase.jpg',
      title: 'JPMorgan Chase & Co.',
      dates: 'June 2021 - Current',
      descriptionPoints: [
        'Rewrite the legacy fraud tracking application for support specialists with a more modern, intuitive design',
        'Collaborate remotely with a team of 7 developers across time zones using the agile framework with Jira',
        'Utilize React, Spring Boot, Cassandra, Jest, Jenkins, and Maven to code, test, and deploy our application',
        'Create descriptive documentation about custom components and code decisions using Confluence',
      ],
      generalLink:
        'https://www.jpmorganchase.com/',
      generalLinkName: 'Website',
      generalFaIcon: 'fas fa-desktop',
    },
    {
      imageUrl: '/assets/images/budgetmylife.jpg',
      title: 'Budget My Life',
      dates: 'May 2020 - Current',
      descriptionPoints: [
        'Design, code, and deploy a beautiful and intuitive budgeting application using Flutter and material design',
        'Invested 300+ hours into this open-source personal project with 1000+ installs and 4.3 stars on the Play Store',
        'Track transactions and generate insights on how users handle their money through charts_flutter library',
        'Created a CI/CD workflow to automatically build and deploy the app to the Play Store when a tag was created on the production branch',
        'Utilize SQLite to store and query the user’s transactions',
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
      title: 'HackPSU Frontend & App',
      dates: 'Oct 2019 - Current',
      descriptionPoints: [
        'Design and build HackPSU’s first mobile app using React Native',
        'Maintain and add useful features to the website and its webapp component using HTML/CSS, Javascript, and Angular',
        'Allow 1000+ users to query backend database to get user data',
      ],
      generalLink: 'https://hackpsu.org/',
      generalLinkName: 'Website',
      generalFaIcon: 'fas fa-desktop',
      githubLink: 'https://github.com/Hack-PSU/',
      skills: 'React Native, Angular, Typescript, Figma, Mobile app dev',
    },
    {
      imageUrl: '/assets/images/websitepreview.jpg',
      title: 'Personal Portfolio',
      dates: 'July 2020 - Current',
      descriptionPoints: [
        'This website! One of my summer personal projects',
        'Design and code this portfolio using Angular (HTML/CSS, Typescript), Bulma (Bootstrap alternative) ',
        "Utilized Angular's object-oriented values to prevent repeated code by using components for elements and to make the design easily changeable",
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
      skills: 'Robotics, Java, Android Studio, C/C++, GitHub, Tensorflow',
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
