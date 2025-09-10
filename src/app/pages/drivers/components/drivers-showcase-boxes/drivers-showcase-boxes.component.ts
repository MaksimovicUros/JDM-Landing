import { Component, Input } from '@angular/core';
import { IShowcaseBox } from './showcase-boxes.model';

@Component({
  selector: 'app-drivers-showcase-boxes',
  templateUrl: './drivers-showcase-boxes.component.html',
  styleUrls: ['./drivers-showcase-boxes.component.scss']
})
export class DriversShowcaseBoxesComponent {
  @Input() data!: IShowcaseBox[];
}
