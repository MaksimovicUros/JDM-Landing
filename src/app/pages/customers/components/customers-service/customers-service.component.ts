import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomersOverlayComponent } from '../customers-overlay/customers-overlay.component';
import { ICustomersOverlay } from '../../customers-overlay.modal';

interface IServiceItem {
  title: string | null;
  subtitle: string | null;
  text: string | null;
  overlay: ICustomersOverlay | null;
}

@Component({
  selector: 'app-customers-service',
  templateUrl: './customers-service.component.html',
  styleUrls: ['./customers-service.component.scss']
})
export class CustomersServiceComponent {
  @ViewChild('cursorText') cursorText!: ElementRef<HTMLDivElement>;
  @ViewChild('cursorBg') cursorBg!: ElementRef<HTMLDivElement>;

  targetX = 0;
  targetY = 0;
  bgX = 0;
  bgY = 0;
  animationFrameId: any;
  leaveTimer: any = null;
  isCursorActive = false;
  containers: HTMLElement[] = [];

  serviceItems: IServiceItem[] = [
    {
      title: 'Full Truck Load',
      subtitle: '$ 1.000.000 VALUE CARGO',
      text: 'As a logistics company with top-notch equipment and extensive knowledge, we are confident in our ability to meet your needs.',
      overlay: {
        bannerImgSrc: 'assets/images/customers/overlay/full-truck-load-cover.jpg',
        leftImgSrc: 'assets/images/customers/overlay/full-truck-load-left.jpg',
        rightImgSrc: 'assets/images/customers/overlay/full-truck-load-right.jpg',
        title: 'Full Truck Load',
        boldedText: [
          'We are specialists at offering end-to-end service. You may be sure that your freight will be delivered more quickly and without additional stops if you choose FTL service.',
          'You will be given a new truck and trailer specifically for your cargo. We provide 100% visibility and 24/7 load tracking.'
        ],
        text: 'Our dry van division consists of the: 1000+ Vented Van 53\' trailers 500+ trucks no older than a year or two.',
        cargoValue: '$1.000.000',
        maxWeight: '45.000 lbs'
      }
    },
    {
      title: 'Expedite',
      subtitle: 'READY WHEN YOU ARE',
      text: 'Fast driving isn\'t the point; the point it is to think and prepare quickly. If you are in a hurry, we can put our recourses to help you achieve your goals.',
      overlay: {
        bannerImgSrc: 'assets/images/customers/overlay/expedite-service-scaled.jpg',
        leftImgSrc: 'assets/images/customers/overlay/expedite-service-left.jpg',
        rightImgSrc: 'assets/images/customers/overlay/expedite-service-right.jpg',
        title: 'Expedite',
        boldedText: ['When something is urgent, every second counts. You need a reliable carrier to get your shipment to your customer in a timely manner. You need a well-maintained truck, an experienced driver, and a skilled logistical support team if you\'re dealing with a time-sensitive situation.'],
        text: 'Based on your existing scenario, we\'ll come up with the quickest solution. You\'ll get a team crew  or several trucks if you need it. We have a deadline, and we must meet it.',
        cargoValue: '$1.000.000',
        maxWeight: '45.000 lbs'
      }
    },
    {
      title: 'Trailer Pool',
      subtitle: 'MORE THAN 1000 TRAILERS',
      text: 'Don\'t waste time and money. Be flexible with loading and unloading. Reduce detention and plan ahead.',
      overlay: {
        isBannerVideo: true,
        bannerImgSrc: 'assets/images/customers/overlay/trailer-pool.mp4',
        leftImgSrc: 'assets/images/customers/overlay/trailer-pool-left.jpg',
        rightImgSrc: 'assets/images/customers/overlay/trailer-pool-right.jpg',
        title: 'Trailer Pool',
        boldedText: [
          'By using a trailer pool, JDM EXPEDITE INC can speed the process while also lowering operating expenses. Fast and efficient services are provided through a customer-focused approach and quick transportation. Our pricing is designed to match the needs of every single customer.',
          'If you\'re looking for a trailer pool service, we can help.'
        ],
        text: 'Our trailers, which are made by the major manufacturers, are perfectly maintained to the highest safety standards and equipped with a system for 24/7 tracking.',
        cargoValue: '$1.000.000',
        maxWeight: '45.000 lbs'
      }
    },
    {
      title: 'Dedicated',
      subtitle: 'MORE THAN 300 TRUCKS',
      text: 'Keep a good bond with your clients by providing excellent service. We have a fleet that can help you transport your cargo anywhere in the United States on time.',
      overlay: {
        isBannerVideo: true,
        bannerImgSrc: 'assets/images/customers/overlay/dedicated.mp4',
        leftImgSrc: 'assets/images/customers/overlay/dedicated-left.jpg',
        rightImgSrc: 'assets/images/customers/overlay/dedicated-right.jpg',
        title: 'Dedicated',
        boldedText: ['For clients with consistent clients and strict deadlines, dedicated logistics is always a welcome solution.'],
        text: 'We provide route optimization, scheduling, planning, and 24-hour load tracking and visibility. Your cargo will be transported using new trucks and trailers operated by qualified and experienced truck drivers.',
        cargoValue: '$1.000.000',
        maxWeight: '45.000 lbs'
      }
      
    },
    {
      title: 'GET IN TOUCH WITH US',
      subtitle: null,
      text: null,
      overlay: null
    },
    {
      title: 'EDI Integration',
      subtitle: 'MAKE IT EASIER',
      text: 'Save the forest and make communication flow easier and faster. Our company is able to set up an EDI system that will ease communication with business partners.',
      overlay: {
        bannerImgSrc: 'assets/images/customers/overlay/edi-integration.jpg',
        leftImgSrc: 'assets/images/customers/overlay/edi-integration-left.jpg',
        rightImgSrc: 'assets/images/customers/overlay/edi-integration-right.jpg',
        title: 'EDI Integration',
        boldedText: ['Today\'s increasingly challenging trucking processes has placed trucking business under great pressure to make trucking operations more efficient.'],
        text: 'Also, companies are constantly investing in solutions that facilitate faster and more secure data sharing. Electronic Data Interchange is a digital protocol that automates those trucking oprations and the ultimate result is accurate communication with fewer manual processes and lower administrative costs. EDI is an excellent way for trucking companies to improve their operations and provide better customer service.',
        cargoValue: '$1.000.000',
        maxWeight: '45.000 lbs'
      }
      
    },
    {
      title: 'Available Trucks',
      subtitle: 'REAL TIME INSIGHT',
      text: 'Grab your truck NOW! A real-time view of our available vehicles and all the relevant information may be seen here. It\'s easy to get along with our team. Try it out.',
      overlay: {
        bannerImgSrc: 'assets/images/customers/overlay/available-truck-cover.jpg',
        leftImgSrc: 'assets/images/customers/overlay/available-truck-left.jpg',
        rightImgSrc: 'assets/images/customers/overlay/available-truck-right.jpg',
        title: 'Available Trucks',
        boldedText: [
          'A waste of time is not wanted. It\'s important how easily you can identify and locate our trucks.',
          'You can check the availability of our trucks at any time, as well as all the relevant information. Visibility is important at times and crucial at others.'
        ],
        text: 'Our developers have come up with a real-time view. It is possible to see where our trucks are headed at any given time and use this information in order to cover your loads.',
        cargoValue: '$1.000.000',
        maxWeight: '45.000 lbs'
      }
    },
    {
      title: '24/7 Load Tracking',
      subtitle: 'ROUND THE CLOCK',
      text: 'Knowing exactly where your cargo is at all times is a huge stress reliever. Every one of our customers is getting this king of service from us.',
      overlay: {
        isBannerVideo: true,
        bannerImgSrc: 'assets/images/customers/overlay/24-7-load-tracking-cover.mp4',
        leftImgSrc: 'assets/images/customers/overlay/24-7-load-tracking-left.jpg',
        rightImgSrc: 'assets/images/customers/overlay/24-7-load-tracking-right.jpg',
        title: '24/7 Load Tracking',
        boldedText: ['Company strength lies within the people. Our team of dedicated professionals is the heart of everything we do. Every step in the transportation process is taken care of 24/7/365.'],
        text: 'With over 500 trucks and 1000 trailers, our main goal is to keep our fleet in a great shape with the latest year model trucks. We can be your reliable partner when it comes to dedicated and expedited lanes.',
        cargoValue: '$1.000.000',
        maxWeight: '45.000 lbs'
      }
    },
  ]

  constructor(private dialog: MatDialog) {}

  ngAfterViewInit() {
    // Get all cursor containers
    this.containers = Array.from(document.querySelectorAll('.cursor-container'));
    
    if (this.containers.length) {
      // Add event listeners to all containers
      this.containers.forEach(container => {
        container.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
        container.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
        container.addEventListener('mousemove', this.moveCursor.bind(this));
      });

      // Add document-wide mouse move listener for better tracking
      document.addEventListener('mousemove', this.moveCursor.bind(this));
    }
  }

  openOverlay(item: IServiceItem) {
    this.dialog.open(CustomersOverlayComponent, {
      data: item.overlay,
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'customers-overlay-dialog'
    });
  }

  handleMouseEnter() {
    // Cancel any pending hide operation
    if (this.leaveTimer) {
      clearTimeout(this.leaveTimer);
      this.leaveTimer = null;
    }
    
    if (!this.isCursorActive) {
      this.showCursor();
    }
  }

  handleMouseLeave(event: MouseEvent) {
    // Check if we're moving to another cursor-container
    const relatedTarget = event.relatedTarget as HTMLElement;
    const isMovingToAnotherContainer = relatedTarget && 
      (relatedTarget.classList.contains('cursor-container') || 
       relatedTarget.closest('.cursor-container'));

    if (!isMovingToAnotherContainer) {
      this.startLeaveTimer();
    }
  }

  showCursor() {
    this.isCursorActive = true;
    this.cursorText.nativeElement.classList.add('visible');
    this.cursorBg.nativeElement.classList.add('visible');
    this.animateBg();
  }

  hideCursor() {
    this.isCursorActive = false;
    this.cursorText.nativeElement.classList.remove('visible');
    this.cursorBg.nativeElement.classList.remove('visible');
    cancelAnimationFrame(this.animationFrameId);
  }

  startLeaveTimer() {
    // Clear any existing timer
    if (this.leaveTimer) {
      clearTimeout(this.leaveTimer);
    }
    
    // Set new timer to hide cursor after 1 second
    this.leaveTimer = setTimeout(() => {
      this.hideCursor();
    }, 100);
  }

  moveCursor(event: MouseEvent) {
    if (!this.isCursorActive) return;

    // Text follows directly
    this.cursorText.nativeElement.style.left = event.clientX + 'px';
    this.cursorText.nativeElement.style.top = event.clientY + 'px';

    // Background lags
    this.targetX = event.clientX;
    this.targetY = event.clientY;
  }

  animateBg() {
    const bg = this.cursorBg.nativeElement;

    const animate = () => {
      this.bgX += (this.targetX - this.bgX) * 0.2; // smoothing factor
      this.bgY += (this.targetY - this.bgY) * 0.2;

      bg.style.left = this.bgX + 'px';
      bg.style.top = this.bgY + 'px';

      this.animationFrameId = requestAnimationFrame(animate);
    };

    animate();
  }

  ngOnDestroy() {
    if (this.leaveTimer) {
      clearTimeout(this.leaveTimer);
    }
    
    // Remove all event listeners
    this.containers.forEach(container => {
      container.removeEventListener('mouseenter', this.handleMouseEnter.bind(this));
      container.removeEventListener('mouseleave', this.handleMouseLeave.bind(this));
      container.removeEventListener('mousemove', this.moveCursor.bind(this));
    });
    
    document.removeEventListener('mousemove', this.moveCursor.bind(this));
    cancelAnimationFrame(this.animationFrameId);
  }
}
