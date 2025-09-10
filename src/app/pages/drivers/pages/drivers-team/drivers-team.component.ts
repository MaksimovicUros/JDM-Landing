import { Component } from '@angular/core';
import { ICommentsData } from 'src/app/shared/components/comments/comments.modal';
import { IDiscountData } from 'src/app/shared/components/discount/discount.model';
import { IOperatingArea } from 'src/app/shared/components/operating-area/operating-area.model';
import { ISectionVideo } from 'src/app/shared/components/section-with-video/section-with-video.modal';
import { IShowCase } from 'src/app/shared/components/showcase-section/showcase-section.model';
import { ISliderData } from 'src/app/shared/components/slider/slider.model';

@Component({
  selector: 'app-drivers-team',
  templateUrl: './drivers-team.component.html',
  styleUrls: ['./drivers-team.component.scss']
})
export class DriversTeamComponent {

  sectionVideoItem: ISectionVideo = {
    title: 'Fast Hiring',
    textInnerHtml: 
    '<p class="p-drivers">We all know time is money. Because of that, our team has developed an online orientation that will prevent you from wasting your time.</p> <p class="p-drivers"><strong>It literally means that you are able to finish your orientation class prior to coming to our office.</strong></p> <p class="p-drivers">After you finish your orientation successfully, the only thing that remains is to come to our office, go through the basics with our safety, and start making money the same day.</p>',
    buttonText: 'Contact Us',
  }

  firstShowcaseData: IShowCase = {
    title: null,
    mainText: null,
    showCaseItems: [
      {
        label: 'OUR VALUE',
        isVideo: false,
        title: 'No Downtime',
        text: 'You\'ll be scheduled for the next one before delivering the load. Our database of over 50.000 shippers and brokers is more than enough to keep you on the road at all times.',
        imgUrl: 'assets/images/drivers/team-driver/no-team-downntime.jpg',
        buttonText: 'Contact Us',
        buttonUrl: 'drivers/contact'
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

  secondShowcaseData: IShowCase = {
    title: null,
    mainText: null,
    firstItemBlueBkg: true,
    showCaseItems: [
      {
        label: 'OUR VALUE',
        isVideo: true,
        title: 'Around the Clock Assistance',
        text: 'There are two of you, but your third player has arrived. We handle everything else while you\'re on the road. Our organization is strong enough to provide you with any assistance 24 hours a day, seven days a week.',
        imgUrl: 'assets/images/drivers/team-driver/around-the-clock.mp4',
        buttonText: 'Contact Us',
        buttonUrl: 'drivers/contact',
      }
    ]
  }

  operatingItem: IOperatingArea = {
      title: 'Coast to Coast',
      text: 'Drive through nearly every state, earn above-average pay rates, and enjoy the beauty of our country. You\'ll be able to drive the full clock without having to wait for the load. We\'ve built a network of over 50.000 customers from coast to coast over the years.',
      showLabel: true,
      labelText: 'Team Drivers',
      bkgWhite: true,
      imgSrc: 'assets/images/operating-area/usa-map-team-drivers.png',
      imgSrcSet: `
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
      showLocation: true
    }

  thirdShowcaseData: IShowCase = {
    title: null,
    mainText: null,
    showCaseItems: [
      {
        label: 'OUR VALUE',
        isVideo: false,
        title: 'Loyalty Pays off',
        text: 'Your first day with us will be a start, but as time goes on, you will be rewarded more and more. We believe that loyalty and trust go hand in hand and are mutually beneficial.',
        imgUrl: 'assets/images/drivers/team-driver/loyalty-pays-off.jpg',
        buttonText: 'Contact Us',
        buttonUrl: 'drivers/contact',
      },
      {
        label: 'OUR VALUE',
        isVideo: false,
        title: 'Skilled Drivers Earn More',
        text: 'We want our teams to have a great satisfying paycheck. That is why we will identify and reward above-average performance. If you can make more money, that means we\'re on the right track.',
        imgUrl: 'assets/images/drivers/team-driver/skilled-drivers-earn-more.jpg',
        buttonText: 'Contact Us',
        buttonUrl: 'drivers/contact',
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
    };

  discountData: IDiscountData = {
      titleHtml: `<h2 class="h2-discount">Sign on Bonus:</h2><h2 class="h2-discount">Take it <span class="color-main-yellow">NOW</span></h2>`,
      text: 'Our tale started in the year 2010. When we originally opened our doors, we were a little operation with a few trucks and an ambitious goal to lead our field. Superior customer service has always been one of our top priorities. All of our loads are treated with the highest care and precision as they are transported to their destinations.',
      buttonText: 'Sign on Now',
      buttonUrl: 'drivers/conntact'
  }

  ngAfterViewInit() {
    // fix an autoplay policy issue.
    const video = document.getElementById('team-banner-video') as HTMLVideoElement;
    if (video) {
      video.muted = true;
      video.play().catch(err => {
        console.log('Autoplay blocked:', err);
      });
    }
  }
}
