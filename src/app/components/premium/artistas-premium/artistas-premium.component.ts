import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-artistas-premium',
  templateUrl: './artistas-premium.component.html',
  styleUrls: ['./artistas-premium.component.scss'],
})
export class ArtistasPremiumComponent {
  photos = [
    { src: 'assets/imgs/larissa.jpg' },
    { src: 'assets/imgs/flavia.jpeg' },
    { src: 'assets/imgs/marcos.png' },
  ];

  toggleCaption(photo: any) {
    photo.showCaption = !photo.showCaption;
  }
}
