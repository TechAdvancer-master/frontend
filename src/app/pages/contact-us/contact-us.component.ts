import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormContactUsComponent } from '../../shared/components/forms/form-contact-us/form-contact-us.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgFor } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormContactUsComponent, NgFor, TranslateModule, MatExpansionModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit, OnDestroy {
  faqs: { QUESTION: string; ANSWER: string }[] = [];
  businessHours: { DAY: string; HOURS: string }[] = [];
  hero_title = '';
  hero_description = ''
  faqs_title = ''
  business_hours_title = ''
  business_hours_description = ''

  private destroy$ = new Subject<void>();

  constructor(@Inject(TranslationService) private translationService: TranslationService) { }

  ngOnInit(): void {
    this.loadPageTranslations();

    this.translationService.onLanguageChange()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.loadPageTranslations());
  }

  private loadPageTranslations(): void {
    this.translationService.loadPageTranslations('contactus').then((translations) => {
      this.hero_title = translations.CONTACT_US.HERO.TITLE;
      this.hero_description = translations.CONTACT_US.HERO.DESCRIPTION;
      this.faqs_title = translations.CONTACT_US.FAQS.TITLE;
      this.business_hours_title = translations.CONTACT_US.BUSINESS_HOURS.TITLE;
      this.business_hours_description = translations.CONTACT_US.BUSINESS_HOURS.DESCRIPTION;
      this.faqs = translations['CONTACT_US']['FAQS']['ITEMS'] || [];
      this.businessHours = translations['CONTACT_US']['BUSINESS_HOURS']['ITEMS'] || [];
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
