import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dedicated-lanes',
  templateUrl: './dedicated-lanes.component.html',
  styleUrls: ['./dedicated-lanes.component.scss']
})
export class DedicatedLanesComponent {
  @ViewChild('container') container!: ElementRef<HTMLDivElement>;
  selected: 'solo' | 'team' = 'solo';

  private observer!: IntersectionObserver;

  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    // fix an autoplay policy issue.
    const video = document.getElementById('lanes-video') as HTMLVideoElement;
    if (video) {
      video.muted = true;
      video.play().catch(err => {
        console.log('Autoplay blocked:', err);
      });
    }

    this.observer = new IntersectionObserver(
      entries => {
        console.log('test ', entries)
        if (entries[0].isIntersecting) {
            console.log('test ', entries)
          this.container.nativeElement.classList.add('animate');
          this.observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    this.observer.observe(this.container.nativeElement);
  }

  setActive(type: 'solo' | 'team') {
    this.selected = type;
  }
}
