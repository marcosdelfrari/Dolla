import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-header',
  templateUrl: './banner-header.component.html',
  styleUrls: ['./banner-header.component.scss']
})
export class BannerHeaderComponent implements OnInit {
  phrases: string[] = [
    'Somos um selo multiskill. Estratégia, planejamento e ux são nossas especialidades.',
    'Aprendendo Angular com efeitos!',
    'Desenvolva incríveis interfaces!',
    'Divirta-se criando projetos!'
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
