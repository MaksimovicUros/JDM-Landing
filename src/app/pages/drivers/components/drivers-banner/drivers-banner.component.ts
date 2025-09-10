import { Component } from '@angular/core';

@Component({
  selector: 'app-drivers-banner',
  templateUrl: './drivers-banner.component.html',
  styleUrls: ['./drivers-banner.component.scss']
})
export class DriversBannerComponent {
ngAfterViewInit() {
    // fix an autoplay policy issue.
    const video = document.getElementById('drivers-banner-video') as HTMLVideoElement;
    if (video) {
      video.muted = true;
      video.play().catch(err => {
        console.log('Autoplay blocked:', err);
      });
    }
  }
}
