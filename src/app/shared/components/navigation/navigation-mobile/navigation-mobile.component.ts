import { Component } from '@angular/core';
import { NavigationTextBasedComponent } from "../navigation-text-based/navigation-text-based.component";
import { LogoComponent } from "../../logo/logo.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-navigation-mobile',
  standalone: true,
  imports: [NavigationTextBasedComponent, LogoComponent, MatButtonModule, MatIcon],
  templateUrl: './navigation-mobile.component.html',
  styleUrl: './navigation-mobile.component.scss'
})
export class NavigationMobileComponent {

}
