import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ICommentsData } from './comments.modal';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  @Input() data!: ICommentsData;
  @ViewChild('commentsTitle') commentsTitle!: ElementRef<HTMLHeadingElement>;
  @ViewChild('itemsWrapper') itemsWrapper!: ElementRef<HTMLHeadingElement>;
  

  private observer!: IntersectionObserver;
  private itemsObserver!: IntersectionObserver;
  
  constructor(private element: ElementRef) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          this.commentsTitle.nativeElement.classList.add('animate');
          this.observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    this.observer.observe(this.element.nativeElement);

    this.itemsObserver = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          this.itemsWrapper.nativeElement.classList.add('animate');
          this.itemsObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    this.itemsObserver.observe(this.itemsWrapper.nativeElement);
  }
}
