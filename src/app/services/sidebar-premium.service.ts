import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarPremiumService {
  options: any[] = [
    { label: 'nao', route: '/' },
   // { label: 'Archive', route: '' },
   // { label: 'Courses', route: '' },
    { label: 'Fire Data', route: '/fire-data' },
   // { label: 'MasterClass', route: '' },
    { label: 'User Experience', route: '/user-experience' },
    { label: 'Portifólio', route: '/portifolio' },
  ];

  constructor() {}
}
