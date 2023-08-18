import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() tags!: { text: string, background: string }[];
  @Input() imageSrc!: string;
  @Input() imageAlt!: string;
  @Input() buttonLink: string | undefined;
  @Input() buttonText!: string;
  @Input() idDoCliente!: string;
}
