import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { CarouselComponent } from '../../shared/components/carousel/carousel.component';
import { CardServiceComponent } from '../../shared/components/card/card-service/card-service.component';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { CardProductComponent } from '../../shared/components/card/card-product/card-product.component';
import { MatListModule } from '@angular/material/list';
import { CardTestimonialComponent } from '../../shared/components/card/card-testimonial/card-testimonial.component';
import { FeatureListComponent } from '../../shared/components/feature-list/feature-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    CardServiceComponent,
    CarouselComponent,
    BannerComponent,
    CardProductComponent,
    MatListModule,
    CardTestimonialComponent,
    FeatureListComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  services: Array<{ icon: string; title: string; description: string; href: string }> = [];
  products: Array<{ title: string; description: string; href: string }> = [];
  whyChooseUs: Array<{ title: string; description: string }> = [];
  keyTechs: Array<{ title: string; description: string }> = [];
  successStories: Array<{ text: string; client: string }> = [];
  exploreLinks: Array<{ text: string; url: string }> = [];

  private destroy$ = new Subject<void>();

  constructor(@Inject(TranslationService) private translationService: TranslationService) { }

  ngOnInit(): void {
    this.loadPageTranslations();

    this.translationService.onLanguageChange()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.loadPageTranslations());
  }

  private loadPageTranslations(): void {
    this.translationService.loadPageTranslations('home').then((translations) => {
      this.products = [
        {
          title: translations.HOME.PRODUCTS.BUSINESS_PULSE.TITLE,
          description: translations.HOME.PRODUCTS.BUSINESS_PULSE.DESCRIPTION,
          href: 'products/business-pulse',
        },
        {
          title: translations.HOME.PRODUCTS.SMART_BOTS.TITLE,
          description: translations.HOME.PRODUCTS.SMART_BOTS.DESCRIPTION,
          href: 'products/smart-bots',
        },
      ];

      this.whyChooseUs = [
        {
          title: translations.HOME.WHY_CHOOSE_US.POINTS.INNOVATION_DRIVEN.TITLE,
          description: translations.HOME.WHY_CHOOSE_US.POINTS.INNOVATION_DRIVEN.DESCRIPTION,
        },
        {
          title: translations.HOME.WHY_CHOOSE_US.POINTS.CLIENT_CENTRIC.TITLE,
          description: translations.HOME.WHY_CHOOSE_US.POINTS.CLIENT_CENTRIC.DESCRIPTION,
        },
      ];

      this.keyTechs = [
        {
          title: translations.HOME.EXPERTISE.KEY_TECHS.AI.TITLE,
          description: translations.HOME.EXPERTISE.KEY_TECHS.AI.DESCRIPTION,
        },
        {
          title: translations.HOME.EXPERTISE.KEY_TECHS.CLOUD.TITLE,
          description: translations.HOME.EXPERTISE.KEY_TECHS.CLOUD.DESCRIPTION,
        },
        {
          title: translations.HOME.EXPERTISE.KEY_TECHS.SOFTWARE.TITLE,
          description: translations.HOME.EXPERTISE.KEY_TECHS.SOFTWARE.DESCRIPTION,
        },
      ];

      this.successStories = translations.HOME.SUCCESS_STORIES.TESTIMONIALS.map((testimonial: any) => ({
        text: testimonial.TEXT,
        client: testimonial.client,
      }));

      this.exploreLinks = [
        { text: translations.HOME.EXPLORE_LINKS.ABOUT_US, url: '/about-us' },
        { text: translations.HOME.EXPLORE_LINKS.SERVICES, url: '/services' },
        { text: translations.HOME.EXPLORE_LINKS.PRODUCTS, url: '/products' },
        { text: translations.HOME.EXPLORE_LINKS.CONTACT_US, url: '/contact-us' },
      ];
    });

    this.translationService.loadPageTranslations('services').then((translations) => {
      this.services = Object.values(translations.SERVICES).filter(service => typeof service !== 'string').map((service: any) => ({
        icon: service.ICON,
        title: service.TITLE,
        description: service.DESCRIPTION,
        href: service.HREF,
      }));
    });
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
