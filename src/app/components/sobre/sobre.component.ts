import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent {
  isDesktop: boolean | undefined;

  ngOnInit() {
    this.isDesktop = window.innerWidth >= 768; // Defina a largura desejada para decidir o que é considerado "desktop"
    window.onresize = () => {
      this.isDesktop = window.innerWidth >= 768;
    };
  }

}
