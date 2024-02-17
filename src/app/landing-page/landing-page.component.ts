import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  default_theme : string = 'theme-black';

  storedTheme : string = localStorage.getItem('theme-color') ?? 'default_theme';

  isMenuOpen: boolean = false;

  constructor() {}
  ngOnInit(): void {
  }

  setTheme(theme: string) {
    localStorage.setItem('theme-color', theme);
    this.storedTheme = localStorage.getItem('theme-color') ?? 'default-theme';
  }

  nav_toggle() {
    this.isMenuOpen = !this.isMenuOpen
  }

  isDarkMode:boolean = false;

}
