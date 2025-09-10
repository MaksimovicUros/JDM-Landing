import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drivers-footer-nav',
  templateUrl: './drivers-footer-nav.component.html',
  styleUrls: ['./drivers-footer-nav.component.scss']
})
export class DriversFooterNavComponent implements AfterViewInit {
  @ViewChildren('slideUp') items!: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChildren('termsItem') termsItems!: QueryList<ElementRef<HTMLDivElement>>;

  private observer!: IntersectionObserver;
  private termsWrapperObserver!: IntersectionObserver;

  ngAfterViewInit(): void {
    // create observer
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('animate');
            this.observer.unobserve(entry.target); // stop observing once animated
          }
        });
      },
      { threshold: 0.4 }
    );

    this.items.forEach(item => this.observer.observe(item.nativeElement));

     // create observer
    this.termsWrapperObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('animate');
            this.termsWrapperObserver.unobserve(entry.target); // stop observing once animated
          }
        });
      },
      { threshold: 0.4 }
    );

    this.termsItems.forEach(item => this.termsWrapperObserver.observe(item.nativeElement));
  }
}
