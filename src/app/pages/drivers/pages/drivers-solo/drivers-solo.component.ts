import { Component } from '@angular/core';
import { ICommentsData } from 'src/app/shared/components/comments/comments.modal';
import { IDiscountData } from 'src/app/shared/components/discount/discount.model';
import { IOperatingArea } from 'src/app/shared/components/operating-area/operating-area.model';
import { ISectionVideo } from 'src/app/shared/components/section-with-video/section-with-video.modal';
import { IShowCase } from 'src/app/shared/components/showcase-section/showcase-section.model';
import { ISliderData } from 'src/app/shared/components/slider/slider.model';

@Component({
  selector: 'app-drivers-solo',
  templateUrl: './drivers-solo.component.html',
  styleUrls: ['./drivers-solo.component.scss']
})
export class DriversSoloComponent {
  showcaseData: IShowCase = {
    title: 'Paycheck Above Average',
    mainText: ['Because we want to work with drivers who are above average, we are willing to pay above average.', 'We\'re seeking reliable drivers. Over 3000 miles per week are available for you if you are skilled and responsible.'],
    showCaseItems: [
      {
        label: 'Our Value',
        isVideo: true,
        title: 'Driver Appreciation',
        text: 'The longer you work with us, the more benefits you receive, which we believe is fair. We value commitment. We will guide you from the start to become our Platinum driver and boost your pay.',
        buttonUrl: '/drivers/contact/',
        buttonText: 'Contact Us',
        imgUrl: 'assets/images/drivers/solo-driver/driver-appreciation.mp4'
      },
      {
        label: 'Our Value',
        isVideo: false,
        title: 'No Downtime',
        text: 'You\'ll be scheduled for the next one before delivering the load. Our database of over 50.000 shippers and brokers is more than enough to keep you on the road at all times.',
        buttonUrl: '/drivers/contact/',
        buttonText: 'Contact Us',
        imgUrl: 'assets/images/drivers/solo-driver/no-downtime.jpg'
      },
      {
        label: 'Our Value',
        isVideo: true,
        title: 'Support 24/7/365',
        text: 'You are never left unprotected. We are literally just a phone call away, day or night, for any kind of help or support you demand. All of our shifts are covered by maintenance, safety, and support staff.',
        buttonUrl: '/drivers/contact/',
        buttonText: 'Contact Us',
        imgUrl: 'assets/images/drivers/solo-driver/support.mp4'
      },
      {
        label: 'Our Value',
        isVideo: false,
        title: 'Ongoing Safety Bonus',
        text: 'It\'s easy—we have software that calculates the Driver Performance Safety Score. We would like to reward you for your skill as a driver. The driver managers of JDM Expedite are generous, however they do demand responsible driving.',
        buttonUrl: '/drivers/contact/',
        buttonText: 'Contact Us',
        imgUrl: 'assets/images/drivers/solo-driver/ongoing-safety-bonus.jpg'
      }
    ]
  }

  sliderItems: ISliderData = {
    title: 'Top-notch Equipment',
    text: ['Every year, we refresh our fleet. As a result, 90% of our trucks are no more than a year or two old.', 'The majority of our trucks are Freightliner Cascadia with 505 horsepower. If you see white clean trucks in great shape, they are most likely ours.'],
    items: [
      {
        bkgText: 'FREIGHTLINER',
        imgUrl: 'assets/images/slider/cascadia-truck.png'
      },
      {
        bkgText: 'PETERBILT',
        imgUrl: 'assets/images/slider/peterbilt-truck.png'
      },
      {
        bkgText: 'VOLVO',
        imgUrl: 'assets/images/slider/volvo-truck.png'
      }
    ]
  }

  sectionVideoItem: ISectionVideo = {
    title: 'Fast Hiring',
    textInnerHtml: 
    '<p class="p-drivers">We all know time is money. Because of that, our team has developed an online orientation that will prevent you from wasting your time.</p> <p class="p-drivers"><strong>It literally means that you are able to finish your orientation class prior to coming to our office.</strong></p> <p class="p-drivers">After you finish your orientation successfully, the only thing that remains is to come to our office, go through the basics with our safety, and start making money the same day.</p>',
    buttonText: 'Contact Us',
  }

  operatingItem: IOperatingArea = {
    title: 'Operating Area',
    text: 'You\'ll spend most of your time driving in the Midwest. We will never send you to New York City, Canada, or Mexico. Our loads are almost entirely driven east of I-35.',
    showLabel: true,
    labelText: 'Solo Drivers',
    imgSrc: 'assets/images/operating-area/usa-map-solo-drivers.png',
    imgSrcSet: `
    assets/images/operating-area/usa-map-solo-drivers.png 1314w,
    assets/images/operating-area/usa-map-solo-drivers-white-bg-1280x853.png 1280w,
    assets/images/operating-area/usa-map-solo-drivers-980x653.png 980w,
    assets/images/operating-area/usa-map-solo-drivers-white-bg-480x320.png 480w
    `,
    imgSizes: `
      (min-width: 0px) and (max-width: 480px) 480px,
      (min-width: 481px) and (max-width: 980px) 980px,
      (min-width: 981px) and (max-width: 1280px) 1280px,
      (min-width: 1281px) 1314px,
      100vw
    `,
    showLocation: true
  }

  commentsData: ICommentsData = {
    title: 'All the way UP!',
    texts: ['Let\'s make it open. We offer our drivers help around-the-clock, and we also provide future drivers with onboarding support. Consider every question or worry you may have, and take your time with our Driver Manager to make that move go easily.', 'If you\'re ready, let\'s talk!'],
    buttonText: 'Contact Us',
    buttonUrl: '/drivers/contact',
    comments: [
      {
        imgSrc: 'assets/images/comments/angelo-2.jpg',
        imgSrcSet: `
          assets/images/comments/angelo-2.jpg 800w,
          assets/images/comments/angelo-2-480x480.jpg 480w
        `,
        imgSizes: '(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 800px, 100vw',
        comment: 'Your job is kinda like a family. No family is perfect, but the communication line in this family is better than a lot of communication lines of the other families. Here, when you do speak about something, it will get addressed.'
      },
      {
        imgSrc: 'assets/images/comments/chavezz.jpg',
        imgSrcSet: `
          assets/images/comments/chavezz.jpg 800w,
          assets/images/comments/chavezz-480x480.jpg 480w
        `,
        imgSizes: '(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 800px, 100vw',
        comment: 'I`ve been with JDM a year. It`s a great company to work for. Great miles, great pay and excellent dispatchers.'
      },
      {
        imgSrc: 'assets/images/comments/markeya.jpg',
        imgSrcSet: `
          assets/images/comments/markeya.jpg 800w,
          assets/images/comments/markeya-480x480.jpg 480w
        `,
        imgSizes: '(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 800px, 100vw',
        comment: 'I love JDM, they are so professional and caring, and they care about your time, because communication is there, and that’s the most important thing for me. I recommended this company to so many people because I love it.'
      },
    ]
  };

  discountData: IDiscountData = {
    titleHtml: `<h2 class="h2-discount">Sign on Bonus:</h2><h2 class="h2-discount">Take it <span class="color-main-yellow">NOW</span></h2>`,
    text: 'Superior customer service has always been one of our top priorities. All of our loads are treated with the highest care and precision as they are transported to their destinations.',
    buttonText: 'Sign on Now',
    buttonUrl: 'drivers/conntact'
  }

  ngAfterViewInit() {
    // fix an autoplay policy issue.
    const video = document.getElementById('solo-banner-video') as HTMLVideoElement;
    if (video) {
      video.muted = true;
      video.play().catch(err => {
        console.log('Autoplay blocked:', err);
      });
    }
  }
}
