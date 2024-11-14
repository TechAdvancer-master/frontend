import { Component } from '@angular/core';
import { CarouselComponent } from '../../shared/components/carousel/carousel.component';
import { CardServiceComponent } from '../../shared/components/card/card-service/card-service.component';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { CardProductComponent } from "../../shared/components/card/card-product/card-product.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, CardServiceComponent, CarouselComponent, BannerComponent, CardProductComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  services = [
    { icon: "/icons/expert-connect.svg", title: 'Expert Connect', description: 'We connect our clients with world-class specialists', href: "services/expert-connect" },
    { icon: "/icons/talent-fusion.svg", title: 'Talent Fusion', description: 'We secure the formation of high-performance teams', href: "services/talent-fusion" },
    { icon: "/icons/skill-lab.svg", title: 'Skill Lab', description: 'We focus on up-skilling and re-skilling developers', href: "services/skill-lab" },
    { icon: "/icons/tech-forge.svg", title: 'Tech-Forge', description: 'Comprehensive training programs in Front-End, Back-End', href: "services/tech-forge" },
    { icon: "/icons/cloud-services.svg", title: 'Cloud Services', description: 'We manage multi-cloud environments', href: "services/cloud-services" }
  ];

  products = [
    { title: "Business Pulse", description: "A comprehensive dashboard for business insights", href: "products/business-pulse" },
    { title: "Smart Bots", description: "AI-powered chatbots for customer service", href: "products/smart-bots" },
  ];
}
