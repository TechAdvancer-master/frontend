import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation-text-based',
  standalone: true,
  imports: [NgFor, MatButtonModule, RouterLink, TranslateModule],
  templateUrl: './navigation-text-based.component.html',
  styleUrls: ['./navigation-text-based.component.scss']
})
export class NavigationTextBasedComponent {
  links = [
    {
      href: "/",
      labelKey: "NAVIGATION.HOME"
    },
    {
      href: "/services",
      labelKey: "NAVIGATION.SERVICES"
    },
    {
      href: "/about-us",
      labelKey: "NAVIGATION.ABOUT_US"
    },
    // {
    //   href: "/contact-us",
    //   labelKey: "NAVIGATION.CONTACT_US"
    // }
  ];

  constructor(public translate: TranslateService) { }
}
