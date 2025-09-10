import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-customers-banner',
  templateUrl: './customers-banner.component.html',
  styleUrls: ['./customers-banner.component.scss']
})
export class CustomersBannerComponent implements AfterViewInit {
  ngAfterViewInit() {
    // fix an autoplay policy issue.
    const video = document.getElementById('customers-banner-video') as HTMLVideoElement;
    if (video) {
      video.muted = true;
      video.play().catch(err => {
        console.log('Autoplay blocked:', err);
      });
    }
  }
}
