import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  imports: [NgFor, MatIcon, MatMenuModule],
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
  standalone: true
})
export class LanguageSwitcherComponent {
  languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' }
  ];
  availableLanguages = ['en', 'es', 'fr'];
  currentLanguage = 'en';

  constructor(private translateService: TranslateService) {
    this.currentLanguage = this.translateService.currentLang; // Set default language
  }

  switchLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    const lang = target.value;
    this.translateService.use(lang);
    this.currentLanguage = lang;
  }

  changeLanguage(languageCode: string): void {
    this.currentLanguage = languageCode;
    this.translateService.use(languageCode);
  }

}
