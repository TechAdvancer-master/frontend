import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent implements AfterViewInit {

  @Input() color = "white";
  @Input() color2 = this.color;
  @Input() width = 60;
  @Input() displayMode: 'minimal' | 'full' | 'just-text' = 'minimal';
  @ViewChild('svgElement', { static: true }) svgElement!: ElementRef<SVGElement>;

  viewBox: string = '0 0 1353.96 366.25';


  ngAfterViewInit(): void {
    this.adjustViewBox();
  }

  private adjustViewBox(): void {
    if (typeof window === 'undefined') return;
    const svg = this.svgElement.nativeElement;
    const visibleElements = Array.from(svg.querySelectorAll<SVGGraphicsElement>('*'))
      .filter((el) => window.getComputedStyle(el).display !== 'none');

    if (visibleElements.length === 0) return;

    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    visibleElements.forEach((el) => {
      const bbox = el.getBBox();
      minX = Math.min(minX, bbox.x);
      minY = Math.min(minY, bbox.y);
      maxX = Math.max(maxX, bbox.x + bbox.width);
      maxY = Math.max(maxY, bbox.y + bbox.height);
    });

    const width = maxX - minX;
    const height = maxY - minY;

    this.viewBox = `${minX} ${minY - minY * 0.5} ${width} ${height}`;
  }
}

