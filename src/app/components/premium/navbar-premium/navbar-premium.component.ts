import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar-premium',
  templateUrl: './navbar-premium.component.html',
  styleUrls: ['./navbar-premium.component.scss']
})
export class NavbarPremiumComponent {
  showPopup: boolean = false;
  showSidebar: boolean = true;

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
  ngOnInit(): void {
    this.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenWidth();
  }

  checkScreenWidth(): void {
    const mediaQuery = window.matchMedia('(max-width: 1080px)');

    if (mediaQuery.matches) {
      this.showSidebar = true;
    } else {
      this.showSidebar = false;
    }
  }
}
