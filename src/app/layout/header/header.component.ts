import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NavigationTextBasedComponent } from '../../shared/components/navigation/navigation-text-based/navigation-text-based.component';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { NavigationMobileComponent } from "../../shared/components/navigation/navigation-mobile/navigation-mobile.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatToolbarModule, MatButtonModule, RouterLink, NavigationTextBasedComponent, LogoComponent, NavigationMobileComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu?.classList.toggle('open');
  }

}
