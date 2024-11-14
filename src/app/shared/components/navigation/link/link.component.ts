import { Component, Input } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  @Input() href: string = '';
  @Input() text: string = '';
}
