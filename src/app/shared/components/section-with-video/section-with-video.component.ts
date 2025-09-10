import { Component, Input } from '@angular/core';
import { ISectionVideo } from './section-with-video.modal';

@Component({
  selector: 'app-section-with-video',
  templateUrl: './section-with-video.component.html',
  styleUrls: ['./section-with-video.component.scss']
})
export class SectionWithVideoComponent {
  @Input() data!: ISectionVideo
}
