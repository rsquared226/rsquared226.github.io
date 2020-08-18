import { Component, OnInit } from '@angular/core';
import { InfoCardDetails } from '../info-card/info-card.component';

@Component({
  selector: 'app-leadership',
  // TODO: Make inline
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css'],
})
export class LeadershipComponent implements OnInit {
  infoCardDetails: InfoCardDetails[] = [
    {
      imageUrl: 'https://hackpsu.org/assets/images/logo-daytime.svg',
      title: 'HackPSU',
      role: 'Tech Director',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan ligula ut mi vehicula, in pulvinar orci.',
      skills: 'C++, Java',
      githubLink: '#',
    },
    {
      imageUrl: 'https://hackpsu.org/assets/images/logo-daytime.svg',
      title: 'ASDF',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan ligula ut mi vehicula, in pulvinar orci iaculis. Nunc ut aliquam neque. Curabitur id justo nec elit ultricies consequat. Nunc nec neque eget purus tempus aliquet. Fusce accumsan nibh leo, a euismod arcu pharetra nec. Proin feugiat metus quis imperdiet euismod. Mauris nunc urna, facilisis ac feugiat nec, interdum et diam. Praesent a scelerisque odio.',
      skills: 'C++, Java',
      generalLink: 'https://hackpsu.org/',
      generalLinkName: 'Website',
      generalFaIcon: 'fas fa-desktop',
    },
    {
      imageUrl: 'https://hackpsu.org/assets/images/logo-daytime.svg',
      title: 'Anothertest',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan ligula ut mi vehicula, in pulvinar orci iaculis. Nunc ut aliquam neque. Curabitur id justo nec elit ultricies consequat. Nunc nec neque eget purus tempus aliquet. Fusce accumsan nibh leo, a euismod arcu pharetra nec. Proin feugiat metus quis imperdiet euismod. Mauris nunc urna, facilisis ac feugiat nec, interdum et diam. Praesent a scelerisque odio.',
      skills: 'C++, Java',
      generalLink: 'https://hackpsu.org/',
      generalLinkName: 'Website',
      generalFaIcon: 'fas fa-desktop',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
