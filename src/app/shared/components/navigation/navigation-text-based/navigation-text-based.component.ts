import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation-text-based',
  standalone: true,
  imports: [NgFor, MatButtonModule, RouterLink],
  templateUrl: './navigation-text-based.component.html',
  styleUrl: './navigation-text-based.component.scss'
})
export class NavigationTextBasedComponent {
  links = [
    {
      href: "/",
      label: "Home"
    },
    {
      href: "/our-services",
      label: "Our Services"
    },
    {
      href: "/about-us",
      label: "About us"
    },

  ]

}
