// src/app/home/home.component.ts
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
// import { TranslationService } from 'src/app/core/services/translation.service';
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

    // Reapply translations if the language changes
    this.translationService.onLanguageChange()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.loadPageTranslations());
  }

  private loadPageTranslations(): void {
    this.translationService.loadPageTranslations('home').then((translations) => {
      this.services = [
        {
          icon: '/icons/expert-connect.svg',
          title: translations.HOME.SERVICES.EXPERT_CONNECT.TITLE,
          description: translations.HOME.SERVICES.EXPERT_CONNECT.DESCRIPTION,
          href: 'services/expert-connect',
        },
        {
          icon: '/icons/talent-fusion.svg',
          title: translations.HOME.SERVICES.TALENT_FUSION.TITLE,
          description: translations.HOME.SERVICES.TALENT_FUSION.DESCRIPTION,
          href: 'services/talent-fusion',
        },
        {
          icon: '/icons/skill-lab.svg',
          title: translations.HOME.SERVICES.SKILL_LAB.TITLE,
          description: translations.HOME.SERVICES.SKILL_LAB.DESCRIPTION,
          href: 'services/skill-lab',
        },
        {
          icon: '/icons/tech-forge.svg',
          title: translations.HOME.SERVICES.TECH_FORGE.TITLE,
          description: translations.HOME.SERVICES.TECH_FORGE.DESCRIPTION,
          href: 'services/tech-forge',
        },
        {
          icon: '/icons/cloud-services.svg',
          title: translations.HOME.SERVICES.CLOUD_SERVICES.TITLE,
          description: translations.HOME.SERVICES.CLOUD_SERVICES.DESCRIPTION,
          href: 'services/cloud-services',
        },
      ];

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
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
