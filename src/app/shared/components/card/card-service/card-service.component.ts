import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LinkComponent } from '../../navigation/link/link.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-service',
  standalone: true,
  imports: [MatCardModule, LinkComponent, CommonModule],
  templateUrl: './card-service.component.html',
  styleUrl: './card-service.component.scss'
})
export class CardServiceComponent {
  @Input() service = { icon: "path", title: "title", description: "description", href: "www.google.com" };
}
