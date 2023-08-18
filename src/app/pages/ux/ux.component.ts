import { Component } from '@angular/core';

@Component({
  selector: 'app-ux',
  templateUrl: './ux.component.html',
  styleUrls: ['./ux.component.scss']
})
export class UxComponent {
  cardData = [
    {
      title: 'Carlos Inkt',
      description: 'Desempenhamos um papel fundamental como consultor de marca, fornecendo orientações estratégicas para a construção e aprimoramento da identidade da marca. Além disso, coordenou e executou diversas iniciativas de marketing meticulosamente planejadas. Ao longo do projeto, houve uma estreita colaboração, assegurando a plena consonância das atividades com a visão e os objetivos da marca. O resultado se traduziu em uma estratégia de marca sólida e um conjunto de ações de marketing altamente eficazes, desempenhando um papel significativo no crescimento e sucesso contínuo da marca Carlos Inkt',
      tags: [
        { text: 'Consultoria', background: '#e74c3c' },    // Cor personalizada vermelha
        { text: 'Gestão', background: '#FFD700' },                      // Cor de sucesso amarela
        { text: 'Marketing', background: '#FF6347' },   // Cor de sucesso vermelha
        { text: 'Design Thinking', background: '#FF8C00' },
      ],
      imageSrc: 'assets/imgs/carlos.png',
      imageAlt: 'Carlos',
      buttonLink: 'https://www.instagram.com/carlos.inkt/',
      buttonText: 'View Live',
      idDoCliente:'carlos'
    },
  ];
}
