import { Component } from '@angular/core';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.scss'],
})
export class PortifolioComponent {
  cardData = [
    {
      title: 'Mercedes Diesel',
      description:
        'No projeto desenvolvido em WordPress, foi utilizada a plataforma Elementor para a implementação do website, seguindo meticulosamente o design proposto no Figma. Além disso, recursos multilíngues foram integrados visando alcançar uma audiência diversificada. A colaboração estreita com a equipe foi uma constante, assegurando a perfeita sintonia entre o design e a estrutura, culminando em um resultado final bem-sucedido.',
      tags: [
        { text: 'Wordpress', background: '#3498db' },
        { text: 'Elementor', background: '#9b59b6' },
      ],
      imageSrc: 'assets/imgs/mercedes.png',
      imageAlt: 'Mercedes',
      buttonLink: 'https://mercedesclaimlawyers.com/',
      buttonText: 'View Live',
      idDoCliente: 'mercedes',
    },
    {
      title: 'Zech',
      description:
        'Desenvolvimento do website ZECH, empregando WordPress e Elementor, alinhando-se ao design concebido no Figma. Com habilidade, ele realçou os recursos voltados à proteção familiar, apresentando-os de maneira cativante por meio de uma interface intuitiva. Através de uma entrega alinhada à identidade da marca, ele foi capaz de oferecer um site altamente eficaz, proporcionando uma sensação de tranquilidade e segurança às famílias.',
      tags: [
        { text: 'Wordpress', background: '#3498db' },
        { text: 'Figma', background: '#FFD700' },
        { text: 'Desenvolvimento de Site', background: '#FF6347' },
      ],
      imageSrc: 'assets/imgs/zech.png',
      imageAlt: 'Zech',
      buttonLink: 'https://zech.com.br/',
      buttonText: 'View Live',
      idDoCliente: 'zech',
    },
    {
      title: 'Carlos Inkt',
      description:
        'Desempenhamos um papel fundamental como consultor de marca, fornecendo orientações estratégicas para a construção e aprimoramento da identidade da marca. Além disso, coordenou e executou diversas iniciativas de marketing meticulosamente planejadas. Ao longo do projeto, houve uma estreita colaboração, assegurando a plena consonância das atividades com a visão e os objetivos da marca. O resultado se traduziu em uma estratégia de marca sólida e um conjunto de ações de marketing altamente eficazes, desempenhando um papel significativo no crescimento e sucesso contínuo da marca Carlos Inkt',
      tags: [
        { text: 'Consultoria', background: '#e74c3c' },
        { text: 'Gestão', background: '#FFD700' },
        { text: 'Marketing', background: '#FF6347' },
        { text: 'Design Thinking', background: '#FF8C00' },
      ],
      imageSrc: 'assets/imgs/carlos.png',
      imageAlt: 'Carlos',
      buttonLink: 'https://www.instagram.com/carlos.inkt/',
      buttonText: 'View Live',
      idDoCliente: 'carlos',
    },
    {
      title: 'NHS Lothian',
      description:
        'Desenvolvimento do site no WordPress usando o Elementor, respeitando rigorosamente o design definido no Figma. Adicionei recursos multilíngues para atender a um público internacional. Colaborei com a equipe para garantir a integração perfeita do design e da estrutura, alcançando um resultado final satisfatório.',
      tags: [
        { text: 'Wordpress', background: '#00CEBF' },
        { text: 'Elementor', background: '#FF6347' },
      ],
      imageSrc: 'assets/imgs/nhs.png',
      imageAlt: 'NHS',
      buttonLink: 'https://nhslothianclaimlawyers.com/',
      buttonText: 'View Live',
      idDoCliente: 'nhs',
    },
    {
      title: 'Somos',
      description:
        'Como parte da equipe da Somos, ele deu início ao desenvolvimento de um site impressionante, guiado pelas diretrizes do Figma desde a concepção até a conclusão. Durante toda a trajetória, aprimorou constantemente o projeto, refinando cada detalhe com maestria. Mais adiante, assumiu a liderança de uma equipe de talentosos desenvolvedores para integrar um avançado sistema de tradução baseado em Strapi, culminando em um site expansivo e multilíngue. Sua notável contribuição na realização e evolução deste projeto é motivo de profundo orgulho.',
      tags: [
        { text: 'Desenvolvimento de Site', background: '#e74c3c' },
        { text: 'Figma', background: '#FFD700' },
        { text: 'Angular', background: '#FF6347' },
        { text: 'Integração de Sistemas', background: '#FF8C00' },
      ],
      imageSrc: 'assets/imgs/somos.png',
      imageAlt: 'Somos',
      buttonLink: 'https://somos.us/en-US',
      buttonText: 'View Live',
      idDoCliente: 'somos',
    },
  ];
}
