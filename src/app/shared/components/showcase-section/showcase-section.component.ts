import { Component, Input } from '@angular/core';
import { IShowCase } from './showcase-section.model';

@Component({
  selector: 'app-showcase-section',
  templateUrl: './showcase-section.component.html',
  styleUrls: ['./showcase-section.component.scss']
})
export class ShowcaseSectionComponent {
  @Input() data!: IShowCase;
}
