import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.css'],
})
export class LinkButtonComponent implements OnInit {
  @Input() link: string;
  @Input() linkName: string;
  @Input() bulmaColor: string;
  @Input() faIcon: string;

  constructor() {}

  ngOnInit(): void {
    // So errors aren't thrown if the color isn't specified.
    if (this.bulmaColor == null) {
      this.bulmaColor = '';
    }
  }
}
