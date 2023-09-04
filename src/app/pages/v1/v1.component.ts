import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-v1',
  templateUrl: './v1.component.html',
  styleUrls: ['./v1.component.scss']
})
export class V1Component {
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
