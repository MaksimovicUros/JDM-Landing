import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {
  emailControl = new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] });
  private observer!: IntersectionObserver;

  @ViewChild('newsletterHeading', { static: false }) content!: ElementRef<HTMLHeadingElement>;
  
  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          this.content.nativeElement.classList.add('animate');
          this.observer.disconnect();
        }
      },
      { threshold: 0.8 }
    );

    this.observer.observe(this.content.nativeElement);
  }


  join(): void {
    const value = this.emailControl.value;
    console.log(value);
    //Call API
  }
}
