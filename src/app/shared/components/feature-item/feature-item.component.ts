import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-feature-item',
  standalone: true,
  imports: [MatCardModule, MatDivider],
  templateUrl: './feature-item.component.html',
  styleUrl: './feature-item.component.scss'
})
export class FeatureItemComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
