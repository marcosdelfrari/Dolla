import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  @Input() title!: string;
  @Input() tags!: { text: string; background: string }[];
  @Input() date!: string;
  @Input() link!: string;
}
