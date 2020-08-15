import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css'],
})
export class InfoCardComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() title: string;
  // TODO: make use of role
  @Input() role: string;
  @Input() description: string;
  @Input() skills: string;

  constructor() {}

  ngOnInit(): void {}
}
