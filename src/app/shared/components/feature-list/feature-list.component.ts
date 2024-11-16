import { Component, Input } from '@angular/core';
import { FeatureItemComponent } from '../feature-item/feature-item.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-feature-list',
  standalone: true,
  imports: [FeatureItemComponent, NgFor, NgIf],
  templateUrl: './feature-list.component.html',
  styleUrl: './feature-list.component.scss'
})
export class FeatureListComponent {

  @Input() title: string = '';
  @Input() features: { title: string; description: string }[] = [];

  isLastItem(item: { title: string; description: string }): boolean {
    return this.features.indexOf(item) === this.features.length - 1;
  }
}
