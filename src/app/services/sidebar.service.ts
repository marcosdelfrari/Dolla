import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  options: any[] = [
    { label: 'Home', route: '/' },
   // { label: 'Archive', route: '' },
   // { label: 'Courses', route: '' },
    { label: 'Fire Data', route: '/fire-data' },
   // { label: 'MasterClass', route: '' },
    { label: 'User Experience', route: '/user-experience' },
    { label: 'Portifólio', route: '/portifolio' },
  ];

  constructor() {}
}
