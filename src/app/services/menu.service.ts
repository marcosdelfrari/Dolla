import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
    options: any[] = [
      { label: 'Equipe', route: '/#equipe' },
      { label: 'Expertise', route: '/#expertise' },
      { label: 'Serviços', route: '/#servicos' },
      { label: 'Contato', route: '/#contato' },
    ];

    constructor() {}
  }
