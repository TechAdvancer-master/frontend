import { Component } from '@angular/core';
import { CarouselComponent } from '../../shared/components/carousel/carousel.component';
import { CardServiceComponent } from '../../shared/components/card/card-service/card-service.component';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { CardProductComponent } from "../../shared/components/card/card-product/card-product.component";
import { MatListModule } from '@angular/material/list'
import { CardTestimonialComponent } from '../../shared/components/card/card-testimonial/card-testimonial.component';
import { FeatureListComponent } from "../../shared/components/feature-list/feature-list.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, CardServiceComponent, CarouselComponent, BannerComponent, CardProductComponent, MatListModule, CardTestimonialComponent, FeatureListComponent],
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

  why_choose_us = [
    { title: 'Innovation-Driven', description: 'Constantly at the forefront of AI advancements to offer next-generation solutions.' },
    { title: 'Client-Centric Approach', description: 'We tailor every solution to fit the unique needs of each client, ensuring results that matter.' }
  ]

  key_techs = [
    { title: 'AI & Machine Learning', description: 'Advanced AI-driven tools for predictive analytics, process automation, and decision-making support.' },
    { title: 'Cloud Integration', description: 'Seamless integration of cloud solutions for scalable and secure data management.' },
    { title: 'Custom Software Development', description: 'Tailored software solutions designed to meet your unique business needs.' }
  ]

  exploreLinks = [
    { text: 'Learn more about our About Us story.', url: '/about-us' },
    { text: 'See our full range of services.', url: '/services' },
    { text: 'Discover how our products can transform your business.', url: '/products' },
    { text: 'Ready to connect? Contact Us today.', url: '/contact-us' }
  ];
}
