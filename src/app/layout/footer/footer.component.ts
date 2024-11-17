import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { LogoComponent } from "../../shared/components/logo/logo.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIcon, NgFor, LogoComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  socialMediaLinks = [
    { icon: 'linkedin', url: 'https://linkedin.com' },
    { icon: 'twitter', url: 'https://twitter.com' },
    { icon: 'facebook', url: 'https://facebook.com' },
  ];

  navLinks = [
    { label: 'Home', href: '#banner' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  contactInfo = [
    { type: 'Address', value: '123 TechAdvancer St., Innovation City' },
    { type: 'Phone', value: '+123-456-7890' },
    { type: 'Email', value: 'contact@TechAdvancer.com' },
  ];
}
