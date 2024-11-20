import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-typing',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss'],
})
export class TypingComponent {
  delays = ['0.0s', '0.2s', '0.4s'];
  typingText = 'Escribiendo...'; // Replace with translation if needed
}
