import { Component } from '@angular/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent {
  clients = [
    {
      title: 'Mercedes Diesel',
      tags: [
        { text: 'Wordpress', background: '#00CEBF' },
        { text: 'Elementor', background: '#FF6347' }
      ],
      date: '2021',
      link: '/portifolio#mercerdes'
    },
    {
      title: 'Carlos Inkt',
      tags: [
        { text: 'Consultoria', background: '#e74c3c' },
        { text: 'Design Thinking', background: '#FF8C00' }
      ],
      date: '2023',
      link: '/portifolio#carlos'
    },
    {
      title: 'NHS Lothian',
      tags: [
        { text: 'Wordpress', background: '#3498db' },
        { text: 'Elementor', background: '#9b59b6' }
      ],
      date: '2022',
      link: '/portifolio#nhs'
    },
    {
      title: 'Somos',
      tags: [
        { text: 'WebSite', background: '#00CEBF' },
        { text: 'Angular', background: '#FF6347' }
      ],
      date: '2022',
      link: '/portifolio#somos'
    },
    {
      title: 'Zech',
      tags: [
        { text: 'Wordpress', background: '#3498db' },
        { text: 'Figma', background: '#FFD700' },
        { text: 'WebSite', background: '#FF6347' }
      ],
      date: '2023',
      link: '/portifolio#zech'
    }
  ];
}
