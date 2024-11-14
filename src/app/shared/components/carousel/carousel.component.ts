import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() items: any[] = [];
  @Input() itemTemplate!: TemplateRef<any>;
  activeIndex = 0;

  private startX = 0;
  private currentX = 0;
  private isDragging = false;

  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
    this.isDragging = true;
  }

  onTouchMove(event: TouchEvent) {
    if (!this.isDragging) return;
    this.currentX = event.touches[0].clientX;
  }

  onTouchEnd() {
    if (!this.isDragging) return;
    const deltaX = this.currentX - this.startX;

    const swipeThreshold = 30;
    if (Math.abs(deltaX) > swipeThreshold) {
      if (deltaX < 0) {
        this.next();
      } else {
        this.previous();
      }
    }

    this.isDragging = false;
    this.startX = 0;
    this.currentX = 0;
  }


  next() {
    this.activeIndex = (this.activeIndex + 1) % this.items.length;
  }

  previous() {
    this.activeIndex = (this.activeIndex - 1 + this.items.length) % this.items.length;
  }

  getTransform() {
    const slideWidth = 80; // The percentage width of each slide
    const trackPadding = 10; // The padding on each side of the track
    return `translateX(calc(-${this.activeIndex * slideWidth}% - ${trackPadding}%))`;
  }

}
