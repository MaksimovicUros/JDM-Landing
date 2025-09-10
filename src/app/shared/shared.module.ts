import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';
import { ShowcaseSectionComponent } from './components/showcase-section/showcase-section.component';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { SectionWithVideoComponent } from './components/section-with-video/section-with-video.component';
import { OperatingAreaComponent } from './components/operating-area/operating-area.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DiscountComponent } from './components/discount/discount.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { ActiveLinkDirective } from './directives/active-link/active-link.directive';
import { NewsletterComponent } from './components/newsletter/newsletter.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    CounterComponent,
    ShowcaseSectionComponent,
    SliderComponent,
    SectionWithVideoComponent,
    OperatingAreaComponent,
    CommentsComponent,
    DiscountComponent,
    FooterComponent,
    ActiveLinkDirective,
    NewsletterComponent
  ],
  exports: [
    CounterComponent,
    ShowcaseSectionComponent,
    SliderComponent,
    SectionWithVideoComponent,
    OperatingAreaComponent,
    CommentsComponent,
    DiscountComponent,
    FooterComponent,
    ActiveLinkDirective,
    NewsletterComponent
  ],
})
export class SharedModule {}
