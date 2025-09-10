import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IDiscountData } from './discount.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent {
  @Input() data!: IDiscountData;

  
}
