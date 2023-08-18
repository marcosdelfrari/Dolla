import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  showSidebar = true;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  options: any[] | undefined;

  constructor(private sidebarService: SidebarService) { }

  closePopup(): void {
    this.close.emit();
  }

  ngOnInit(): void {
    this.options = this.sidebarService.options;
    console.log(this.showSidebar)
  }


}
