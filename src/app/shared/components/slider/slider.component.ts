import { Component, ElementRef, HostListener, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ISliderData } from './slider.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @ViewChild('section') sectionRef!: ElementRef<HTMLElement>;
  @ViewChildren('text') textRefs!: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChild('textAnimate') textAnimate!: ElementRef<HTMLHeadingElement>;

  @Input() data!: ISliderData;
  private rafId: number | null = null;
  currentIndex = 0;
  targetTop = 20; // target top position
  currentTop = 20; // current top position (used for smooth animation)

  private observer!: IntersectionObserver;

  constructor(private element: ElementRef) {}

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.data.items.length;
    this.updateTargetTop();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.data.items.length) % this.data.items.length;
    this.updateTargetTop();
  }

    ngAfterViewInit(): void {
      this.observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          this.textAnimate.nativeElement.classList.add('animate');
          this.observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    this.observer.observe(this.element.nativeElement);


      this.updateTargetTop();
      const loop = () => {
        // ease towards target; smaller factor => more lag
      this.currentTop += (this.targetTop - this.currentTop) * 0.12;

      const active = this.textRefs.toArray()[this.currentIndex];
      if (active) active.nativeElement.style.top = `${this.currentTop}px`;

      this.rafId = requestAnimationFrame(loop);
    };
    this.rafId = requestAnimationFrame(loop);

    this.textRefs.changes.subscribe(() => {
      // reset currentTop to avoid jumping when slide changes
      const active = this.textRefs.toArray()[this.currentIndex];
      if (active) {
        const topNow = parseFloat(getComputedStyle(active.nativeElement).top) || 20;
        this.currentTop = topNow;
      }
      this.updateTargetTop();
    });
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  updateTargetTop() {
    const textRef = this.textRefs.toArray()[this.currentIndex];
    if (!textRef) return;

    const text = textRef.nativeElement;

    // The element that defines the absolute positioning context
    const container = (text.offsetParent as HTMLElement) || this.sectionRef.nativeElement;

    // If the active slide is hidden (e.g., display:none), bail out
    const containerStyle = getComputedStyle(container);
    if (containerStyle.display === 'none' || container.clientHeight === 0) return;

    // Page-space positions (robust even with CSS transforms)
    const scrollY = window.scrollY || window.pageYOffset;
    const containerPageTop = container.getBoundingClientRect().top + scrollY;

    // How far we’ve scrolled inside THIS container
    const inside = scrollY - containerPageTop;

    // Padding guards
    const PAD_TOP = 100;
    const PAD_BOTTOM = 20;

    // Max allowed top INSIDE the container
    const maxTop = Math.max(0, container.clientHeight - text.offsetHeight - PAD_BOTTOM);

    // Desired follow position (with top padding)
    const desiredTop = inside + PAD_TOP;

    // CLAMP to container bounds so it CANNOT pass bottom/top
    this.targetTop = Math.min(Math.max(desiredTop, PAD_TOP), maxTop);
  }



  ngOnDestroy(): void {
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }
}
