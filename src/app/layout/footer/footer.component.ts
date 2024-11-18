import { NgFor } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LogoComponent } from "../../shared/components/logo/logo.component";
import { TranslationService } from '../../core/services/translation.service';
import { NavigationTextBasedComponent } from '../../shared/components/navigation/navigation-text-based/navigation-text-based.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIcon, NgFor, RouterLink, TranslateModule, LogoComponent, NavigationTextBasedComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  socialMediaLinks = [
    { icon: 'fa-brands fa-linkedin', url: 'https://www.linkedin.com/company/techadvancer/' },
    // Uncomment if needed
    // { icon: 'fa-brands fa-twitter', url: 'https://twitter.com' },
    // { icon: 'fa-brands fa-facebook', url: 'https://facebook.com' },
  ];

  contactInfo: { type: string; value: string }[] = [];
  private destroy$ = new Subject<void>();

  constructor(private translationService: TranslationService) { }

  ngOnInit(): void {
    this.loadPageTranslations();

    this.translationService.onLanguageChange()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.loadPageTranslations());
  }

  private loadPageTranslations(): void {
    this.translationService.loadPageTranslations('shared').then((translations: any) => {
      this.contactInfo = [
        {
          type: translations['FOOTER']['CONTACT']['ADDRESS_LABEL'] || '',
          value: translations['FOOTER']['CONTACT']['ADDRESS'] || '',
        },
        {
          type: translations['FOOTER']['CONTACT']['PHONE_LABEL'] || '',
          value: translations['FOOTER']['CONTACT']['PHONE'] || '',
        },
        {
          type: translations['FOOTER']['CONTACT']['EMAIL_LABEL'] || '',
          value: translations['FOOTER']['CONTACT']['EMAIL'] || '',
        },
      ];
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
