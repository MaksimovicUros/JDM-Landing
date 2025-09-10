import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IOperatingArea } from './operating-area.model';

@Component({
  selector: 'app-operating-area',
  templateUrl: './operating-area.component.html',
  styleUrls: ['./operating-area.component.scss']
})
export class OperatingAreaComponent implements AfterViewInit {
  @Input() data!: IOperatingArea;

  @ViewChild('title', { static: false }) content!: ElementRef<HTMLHeadingElement>;

  sliderChecked = false;

  private observer!: IntersectionObserver;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          this.content.nativeElement.classList.add('animate');
          this.observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    this.observer.observe(this.elementRef.nativeElement);
  }
}
