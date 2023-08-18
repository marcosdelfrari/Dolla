import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dolla';
  showSidebar = true;

  showPreloading = true;

  ngOnInit(): void {
    this.checkScreenWidth();
    setTimeout(() => {
      this.showPreloading = false;
    }, 3000);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenWidth();
  }

  checkScreenWidth(): void {
    const mediaQuery = window.matchMedia('(max-width: 1080px)');

    if (mediaQuery.matches) {
      this.showSidebar = false;
    } else {
      this.showSidebar = true;
    }
  }


}
