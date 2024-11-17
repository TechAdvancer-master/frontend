import { Component, Output } from '@angular/core';
import { NavigationTextBasedComponent } from "../navigation-text-based/navigation-text-based.component";
import { LogoComponent } from "../../logo/logo.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { EventEmitter } from '@angular/core';
import { LanguageSwitcherComponent } from "../../language-switcher/language-switcher.component";

@Component({
  selector: 'app-navigation-mobile',
  standalone: true,
  imports: [NavigationTextBasedComponent, LogoComponent, MatButtonModule, MatIcon, LanguageSwitcherComponent],
  templateUrl: './navigation-mobile.component.html',
  styleUrl: './navigation-mobile.component.scss'
})
export class NavigationMobileComponent {

  @Output() closeMenu = new EventEmitter<void>();

  onCloseMenu() {
    this.closeMenu.emit();
  }

}
