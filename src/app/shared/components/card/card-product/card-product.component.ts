import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LinkComponent } from '../../navigation/link/link.component';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [MatCardModule, LinkComponent],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {
  @Input() product = { title: "title", description: "description", href: "www.google.com" };
}
