import { Component } from '@angular/core';
import { CardServiceComponent } from "../card/card-service/card-service.component";
import { CarouselComponent } from '../carousel/carousel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule, CardServiceComponent, CarouselComponent],
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent {
  services = [
    { title: 'Expert Connect', description: 'We connect our clients with world-class specialists', href: "services/expert-connect" },
    { title: 'Talent Fusion', description: 'We secure the formation of high-performance teams', href: "services/talent-fusion" },
    { title: 'Skill Lab', description: 'We focus on up-skilling and re-skilling developers', href: "services/skill-lab" },
    { title: 'Tech-Forge', description: 'Comprehensive training programs in Front-End, Back-End', href: "services/tech-forge" },
    { title: 'Cloud Services', description: 'We manage multi-cloud environments', href: "services/cloud-services" }
  ];
  companyName = "TechAdvancer"
}
