import { Component } from '@angular/core';
import { IDiscountData } from 'src/app/shared/components/discount/discount.model';
import { ISectionVideo } from 'src/app/shared/components/section-with-video/section-with-video.modal';

@Component({
  selector: 'app-rent-equipment',
  templateUrl: './rent-equipment.component.html',
  styleUrls: ['./rent-equipment.component.scss']
})
export class RentEquipmentComponent {
  sectionVideoItem: ISectionVideo = {
    title: 'Upcoming trucks',
    textInnerHtml: 
    '<p class="p-drivers">There are 50 brand-new Freightliners arriving to our terminal. We’ll achieve keeping our fleet young and healthy this year as well! Reserve your seat now!</p>',
    buttonText: 'Contact Us',
  };

  discountData: IDiscountData = {
    titleHtml: `<h2 class="h2-discount">Sign on <span class="color-main-yellow">Bonus</span></h2>`,
    text: 'Our tale started in the year 2010. When we originally opened our doors, we were a little operation with a few trucks and an ambitious goal to lead our field. Superior customer service has always been one of our top priorities. All of our loads are treated with the highest care and precision as they are transported to their destinations.',
    buttonText: 'Sign on Now',
    buttonUrl: 'drivers/conntact'
  }
}
