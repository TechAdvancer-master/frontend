import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-testimonial',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card-testimonial.component.html',
  styleUrl: './card-testimonial.component.scss'
})
export class CardTestimonialComponent {
  @Input() testimonial: string = '';
  @Input() client: string = '';
}
