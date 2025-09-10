import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drivers-make-difference',
  templateUrl: './drivers-make-difference.component.html',
  styleUrls: ['./drivers-make-difference.component.scss']
})
export class DriversMakeDifferenceComponent {
  @ViewChild('title', { static: false }) content!: ElementRef<HTMLHeadingElement>;
  @ViewChild('itemsWrapper', { static: false }) items!: ElementRef<HTMLDivElement>;

  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          this.content.nativeElement.classList.add('animate');
          this.items.nativeElement.classList.add('animate');
          this.observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    this.observer.observe(this.items.nativeElement);
  }
}
