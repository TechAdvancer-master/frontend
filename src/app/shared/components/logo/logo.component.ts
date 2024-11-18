import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent implements AfterViewInit {

  @Input() color = "var(--white)";
  @Input() color2 = this.color;
  @Input() width = 60;
  @Input() displayMode: 'minimal' | 'full' | 'just-text' = 'minimal';
  @ViewChild('svgElement', { static: true }) svgElement!: ElementRef<SVGElement>;

  viewBox: string = '0 0 1353.96 366.25';

  constructor(private hostElement: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.adjustViewBox();
    // this.adjustHostHeight();
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

  private adjustHostHeight(): void {
    const svg = this.svgElement.nativeElement;
    const viewBoxValues = this.viewBox.split(' ').map(Number);
    const viewBoxHeight = viewBoxValues[3];

    const aspectRatio = svg.clientWidth / svg.clientHeight;
    const calculatedHeight = viewBoxHeight / aspectRatio;

    this.renderer.setStyle(this.hostElement.nativeElement, 'height', `${calculatedHeight}px`);
  }
}

