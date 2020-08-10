import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // The burger will only show on mobile devices.
  isNavbarBurgerOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onBurgerClick(): void {
    this.isNavbarBurgerOpen = !this.isNavbarBurgerOpen;
  }
}
