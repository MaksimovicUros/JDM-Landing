import { Component } from '@angular/core';
import { ICommentsData } from 'src/app/shared/components/comments/comments.modal';
import { IDiscountData } from 'src/app/shared/components/discount/discount.model';
import { IOperatingArea } from 'src/app/shared/components/operating-area/operating-area.model';
import { ISectionVideo } from 'src/app/shared/components/section-with-video/section-with-video.modal';
import { IShowCase } from 'src/app/shared/components/showcase-section/showcase-section.model';
import { ISliderData } from 'src/app/shared/components/slider/slider.model';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent {
  sliderData: ISliderData = {
    title: 'Ever-growing and Ever-changing Fleet',
    text: ['The modern fleet that JDM EXPEDITE is accumulating now consists of 500+ trucks from major manufacturers.', 'Over 90% of our trucks is no older than year or two. Our fleet, which is always expanding and evolving, is a reflection of our dedication to our drivers and customers.'],
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

  sectionVideoData: ISectionVideo = {
    title: 'Online Orientation',
    textInnerHtml: '<p class="p-drivers">We all know time is money. Because of that, our team has developed an online orientation that will prevent you from wasting your time.</p> <p class="p-drivers"><strong>It literally means that you are able to finish your orientation class prior to coming to our office.</strong></p> <p class="p-drivers">After you finish your orientation successfully, the only thing that remains is to come to our office, go through the basics with our safety, and start making money the same day.</p>',
    buttonText: 'Contact Us',
  }

  operatingAreaData: IOperatingArea = {
    title: 'Operating Area',
    text: 'Trucking is all about strategy and careful planning. Our operating area is designed specifically for drivers so that you can get the most out of your driving experience. Our focus for Solo drivers is east of I-35, while our Team drivers cover the entire country.',
    showLabel: false,
    labelText: '',
    imgSrc: 'assets/images/operating-area/usa-map-solo-drivers.png',
    imgSrcSet: `
    assets/images/operating-area/usa-map-solo-drivers.png 1314w,
    assets/images/operating-area/usa-map-solo-drivers-white-bg-1280x853.png 1280w,
    assets/images/operating-area/usa-map-solo-drivers-980x653.png 980w,
    assets/images/operating-area/usa-map-solo-drivers-white-bg-480x320.png 480w
    `,
    secondImgSrc: 'assets/images/operating-area/usa-map-team-drivers.png',
    secondImgSrcSet: `
    assets/images/operating-area/usa-map-team-drivers.png 1314w,
    assets/images/operating-area/usa-map-team-drivers-1280x853.png 1280w,
    assets/images/operating-area/usa-map-team-drivers-980x653.png 980w,
    assets/images/operating-area/usa-map-team-drivers-480x320.png 480w
    `,
    imgSizes: `
      (min-width: 0px) and (max-width: 480px) 480px,
      (min-width: 481px) and (max-width: 980px) 980px,
      (min-width: 981px) and (max-width: 1280px) 1280px,
      (min-width: 1281px) 1314px,
      100vw
    `,
    showLocation: true,
    showSlider: true
  };

  firstShowcaseData: IShowCase = {
    title: 'We\'re Proud of',
    mainText: ['Everything we\'ve tried to create over the years has been based on values. We believe it is our duty as Americans to promote positive values and drive in ways that serve our country.'],
    showCaseItems: [
      {
        isVideo: false,
        imgUrl: 'assets/images/drivers/proud-section/equal-opportunity-employer.jpg',
        label: 'OUR VALUE',
        title: 'Equal Opportunity Employer',
        text: 'Our company commits to treat every employee and contractor fairly, regardless of age, race, color, religion, national origin, sex, or other personal characteristics. We strongly believe that everyone in the workplace should be treated equally, with dignity and respect.',
        buttonText: 'Contact Us',
        buttonUrl: '/drivers/contact'
      },
      {
        isVideo: false,
        imgUrl: 'assets/images/drivers/proud-section/eco-aware-and-certified.jpg',
        label: 'OUR VALUE',
        title: 'Eco Aware and Certified',
        text: 'This is our soil and air, and we must take care of it. As a SmartWay partner, we are constantly looking for new ways to become more environmentally friendly. Our new equipment is a good place to start when it comes to fuel efficiency.',
        buttonText: 'Contact Us',
        buttonUrl: '/drivers/contact'
      },
    ]
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
  }

  discountData: IDiscountData = {
    titleHtml: `<h2 class="h2-discount">Fuel Discount:</h2><h2 class="h2-discount">Take it <span class="color-main-yellow">NOW</span></h2>`,
    text: 'Big fuel discounts are always welcomed, no matter the state of the market. The best deal on the market plus a fuel discount is yours if you work with us.',
    buttonText: 'Let\'s Connect',
    buttonUrl: '/drivers/contact'
  }
}
