import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-menu-popup',
  templateUrl: './menu-popup.component.html',
  styleUrls: ['./menu-popup.component.scss']
})
export class MenuPopupComponent {
  @Output() close = new EventEmitter<void>();
  showPopup: boolean = false;

  options: any[] | undefined;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.options = this.sidebarService.options;
  }

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.close.emit();
  }
}
