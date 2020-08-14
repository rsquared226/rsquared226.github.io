import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
