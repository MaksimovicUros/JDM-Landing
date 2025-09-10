import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements AfterViewInit {
  @Input() targetNumber!: number;
  currentNumber = 0;
  private observer!: IntersectionObserver;

  constructor(private elementRef: ElementRef) {}

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['targetNumber']) {
  //     this.targetNumber = changes['targetNumber'].currentValue;
  //   }
  // }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          this.animateCount();
          this.observer.disconnect(); // Stop observing once animation starts
        }
      },
      { threshold: 0.7 }
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  animateCount() {
    const duration = 1000; // Animation duration in ms
    const fps = 60; // Frames per second
    const totalFrames = (duration / 1000) * fps;
    const increment = this.targetNumber / totalFrames;

    let frame = 0;
    const interval = setInterval(() => {
      this.currentNumber = Math.round(increment * frame);
      frame++;
      if (frame > totalFrames) {
        this.currentNumber = this.targetNumber; // Ensure the final number is exact
        clearInterval(interval);
      }
    }, 1000 / fps);
  }
}
