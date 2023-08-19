import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-header',
  templateUrl: './banner-header.component.html',
  styleUrls: ['./banner-header.component.scss']
})
export class BannerHeaderComponent implements OnInit {
  phrases: string[] = [
    'Conectamos marcas e pessoas através do poder do marketing.',
    'Marketing: transformando ideias em impacto tangível.',
    'Nossas estratégias de marketing contam histórias que ressoam.',
    'Mensagens cativantes, resultados surpreendentes.'
  ];
  currentPhraseIndex = 0;
  currentText = '';

  ngOnInit(): void {
    this.typePhrase();
  }

  typePhrase(): void {
    const phrase = this.phrases[this.currentPhraseIndex];
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index === phrase.length) {
        clearInterval(typingInterval);
        setTimeout(() => this.changePhrase(), 1500);
      } else {
        this.currentText += phrase.charAt(index);
        index++;
      }
    }, 100);
  }

  changePhrase(): void {
    this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
    this.currentText = '';
    this.typePhrase();
  }
}
