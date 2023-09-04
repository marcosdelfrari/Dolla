import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-artistas-premium',
  templateUrl: './artistas-premium.component.html',
  styleUrls: ['./artistas-premium.component.scss']
})
export class ArtistasPremiumComponent {
  photos = [
    { src: 'assets/imgs/larissa.jpg', caption: 'Legenda da Larissa', showCaption: false },
    { src: 'assets/imgs/flavia.jpeg', caption: 'Legenda da Flavia', showCaption: false },
    { src: 'assets/imgs/marcos.png', caption: 'Legenda do Marcos', showCaption: false }
  ];

  toggleCaption(photo: any) {
    photo.showCaption = !photo.showCaption;
  }
}
