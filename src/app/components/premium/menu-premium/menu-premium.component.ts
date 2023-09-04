import { MenuService } from './../../../services/menu.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-premium',
  templateUrl: './menu-premium.component.html',
  styleUrls: ['./menu-premium.component.scss']
})
export class MenuPremiumComponent {
  @Output() close = new EventEmitter<void>();
  showPopup: boolean = false;

  options: any[] | undefined;

  constructor(private MenuService: MenuService) { }

  ngOnInit(): void {
    this.options = this.MenuService.options;
  }

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.close.emit();
  }
}
