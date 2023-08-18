import { Component } from '@angular/core';

@Component({
  selector: 'app-fire-data',
  templateUrl: './fire-data.component.html',
  styleUrls: ['./fire-data.component.scss']
})
export class FireDataComponent {
  cardData = [

    {
      title: 'Mercedes Diesel',
      description: 'No projeto desenvolvido em WordPress, foi utilizada a plataforma Elementor para a implementação do website, seguindo meticulosamente o design proposto no Figma. Além disso, recursos multilíngues foram integrados visando alcançar uma audiência diversificada. A colaboração estreita com a equipe foi uma constante, assegurando a perfeita sintonia entre o design e a estrutura, culminando em um resultado final bem-sucedido.',
      tags: [
        { text: 'Wordpress', background: '#00CEBF' },    // Cor personalizada vermelha
        { text: 'Elementor', background: '#FF6347' },   // Cor de sucesso vermelha
      ],
      imageSrc: 'assets/imgs/mercedes.png',
      imageAlt: 'Mercedes',
      buttonLink: 'https://mercedesclaimlawyers.com/',
      buttonText: 'View Live',
      idDoCliente:'mercedes'
    },
    {
      title: 'Zech',
      description: 'Desenvolvimento do website ZECH, empregando WordPress e Elementor, alinhando-se ao design concebido no Figma. Com habilidade, ele realçou os recursos voltados à proteção familiar, apresentando-os de maneira cativante por meio de uma interface intuitiva. Através de uma entrega alinhada à identidade da marca, ele foi capaz de oferecer um site altamente eficaz, proporcionando uma sensação de tranquilidade e segurança às famílias.',
      tags: [
        { text: 'Wordpress', background: '#00CEBF' },    // Cor personalizada vermelha
        { text: 'Figma', background: '#FFD700' },                      // Cor de sucesso amarela
        { text: 'Desenvolvimento de Site', background: '#FF6347' },   // Cor de sucesso vermelha
      ],
      imageSrc: 'assets/imgs/zech.png',
      imageAlt: 'Zech',
      buttonLink: 'https://zech.com.br/',
      buttonText: 'View Live',
      idDoCliente:'zech'
    },
    {
      title: 'NHS Lothian',
      description: 'Desenvolvimento do site no WordPress usando o Elementor, respeitando rigorosamente o design definido no Figma. Adicionei recursos multilíngues para atender a um público internacional. Colaborei com a equipe para garantir a integração perfeita do design e da estrutura, alcançando um resultado final satisfatório.',
      tags: [
        { text: 'Wordpress', background: '#00CEBF' },    // Cor personalizada vermelha
        { text: 'Elementor', background: '#FF6347' },   // Cor de sucesso vermelha
      ],
      imageSrc: 'assets/imgs/nhs.png',
      imageAlt: 'NHS',
      buttonLink: 'https://nhslothianclaimlawyers.com/',
      buttonText: 'View Live',
      idDoCliente:'nhs'
    },
    {
      title: 'Somos',
      description: 'Como parte da equipe da Somos, ele deu início ao desenvolvimento de um site impressionante, guiado pelas diretrizes do Figma desde a concepção até a conclusão. Durante toda a trajetória, aprimorou constantemente o projeto, refinando cada detalhe com maestria. Mais adiante, assumiu a liderança de uma equipe de talentosos desenvolvedores para integrar um avançado sistema de tradução baseado em Strapi, culminando em um site expansivo e multilíngue. Sua notável contribuição na realização e evolução deste projeto é motivo de profundo orgulho.',
      tags: [
        { text: 'Desenvolvimento de Site', background: '#e74c3c' },    // Cor personalizada vermelha
        { text: 'Figma', background: '#FFD700' },                      // Cor de sucesso amarela
        { text: 'Angular', background: '#FF6347' },   // Cor de sucesso vermelha
        { text: 'Integração de Sistemas', background: '#FF8C00' },
      ],
      imageSrc: 'assets/imgs/somos.png',
      imageAlt: 'Somos',
      buttonLink: 'https://somos.us/en-US',
      buttonText: 'View Live',
      idDoCliente:'somos'
    },

  ];
}
