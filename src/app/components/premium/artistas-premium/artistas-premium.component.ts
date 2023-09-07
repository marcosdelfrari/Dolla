import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-artistas-premium',
  templateUrl: './artistas-premium.component.html',
  styleUrls: ['./artistas-premium.component.scss'],
})
export class ArtistasPremiumComponent {
  photos = [
    { src: 'assets/imgs/larissa.jpg', nome: 'Larissa Antunes', cargo: 'Custumer Success', showArtist: false },
    { src: 'assets/imgs/flavia.jpeg', nome: 'Flavia Lanza', cargo: 'Copywriter', showArtist: false },
    { src: 'assets/imgs/marcos.png', nome: 'Marcos Lucas', cargo: 'Tech Lead', showArtist: false },
  ];

  toggleArtist(photo: any) {

    if (photo.showArtist == true) {
       photo.showArtist = !photo.showArtist;
    } else {
      photo.showArtist = !photo.showArtist;
    }
    // Oculta a div "artist" para todas as outras fotos
    this.photos.forEach(p => {
      if (p !== photo) {
        p.showArtist = false;
      }
    });

    console.log (photo.showArtist)
  }
}
