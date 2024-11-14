import { Component } from '@angular/core';
import { CarouselComponent } from '../../shared/components/carousel/carousel.component';
import { CardServiceComponent } from '../../shared/components/card/card-service/card-service.component';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { CardProductComponent } from "../../shared/components/card/card-product/card-product.component";
import { MatListModule } from '@angular/material/list'

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, CardServiceComponent, CarouselComponent, BannerComponent, CardProductComponent, MatListModule],
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
    { title: "Business Pulse", description: "Our intelligent platform that provides real-time insights into workforce productivity and efficiency, ensuring optimal resource use and transparency.", href: "products/business-pulse" },
    { title: "Smart Bots", description: "Elevate customer experiences with cutting-edge AI-powered chatbots", href: "products/smart-bots" },
  ];
}
