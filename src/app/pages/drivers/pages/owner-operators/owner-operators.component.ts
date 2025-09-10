import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IShowcaseBox } from '../../components/drivers-showcase-boxes/showcase-boxes.model';
import { ICommentsData } from 'src/app/shared/components/comments/comments.modal';

@Component({
  selector: 'app-owner-operators',
  templateUrl: './owner-operators.component.html',
  styleUrls: ['./owner-operators.component.scss']
})
export class OwnerOperatorsComponent {
  showcaseBoxItems: IShowcaseBox[] = [
    {
      bkgColor: '#0147d6',
      textColor: '#fff',
      contactButtonClass: 'secondary-button',
      imgSrc: 'assets/images/drivers/owner-operators/top-income.jpg',
      isVideo: false,
      title: 'Top Income',
      text: 'The best terms on the market will apply to you when you drive your truck with us. Your work will be much more enjoyable when you get the top income and full support across all departments.'
    },
    {
      bkgColor: null,
      textColor: null,
      contactButtonClass: 'main-button',
      imgSrc: 'assets/images/drivers/owner-operators/all-in-one-services.jpg',
      isVideo: false,
      title: 'Support 24/7',
      text: 'Our owner operators are supported by specially trained teams, which means that operation managers with years of trucking experience are dealing with anything that may arise on the road to success. As previously stated, there is no time to waste because our support is available 24 hours a day, seven days a week.'
    },
  ];

  secondShowcaseBoxItems: IShowcaseBox[] = [
    {
      bkgColor: null,
      textColor: null,
      contactButtonClass: 'main-button',
      imgSrc: 'assets/images/drivers/owner-operators/90-linehaul.jpg',
      isVideo: false,
      title: '90% of Linehaul',
      text: 'Our Owners receive 90% of a line haul. Drivers should only worry about safe driving while we handle logistics, billing, safety and other operations to make sure everything is in order.'
    },
    {
      bkgColor: null,
      textColor: null,
      contactButtonClass: 'main-button',
      imgSrc: 'assets/images/drivers/owner-operators/fuel-discount.jpg',
      isVideo: false,
      title: 'Fuel Discount',
      text: 'We want to help reduce the fuel cost. The longer you stay with us, the greater fuel discount we can provide. You will receive a higher discount based on your performance over time. Ask your recruiter any question you like regarding the specifics.'
    },
    {
      bkgColor: null,
      textColor: null,
      contactButtonClass: 'main-button',
      imgSrc: 'assets/images/drivers/owner-operators/fast-hiring.mp4',
      isVideo: true,
      title: 'Fast Hiring with Online Orientation',
      text: 'Once you have access to our online orientation, you can complete it wherever you are. Once you\'ve done that, all that\'s left for you to do is go through the basics with our Safety Manager and meet our people.'
    },
  ];

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

  @ViewChild('softwareSection') softwareSection!: ElementRef<HTMLDivElement>;
  @ViewChildren('fadeIn') fadeIn!: QueryList<ElementRef<HTMLAnchorElement>>;
  @ViewChildren('appearFromLeft') appearFromLeft!: QueryList<ElementRef<HTMLAnchorElement>>;
  
  private observer!: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          this.fadeIn.forEach(item => item.nativeElement.classList.add('animate'));
          this.appearFromLeft.forEach(item => item.nativeElement.classList.add('animate'));
          this.observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    this.observer.observe(this.softwareSection.nativeElement);
  }
}
