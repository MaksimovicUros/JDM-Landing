import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import { LandingHeaderComponent } from './header/landing-header.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [LandingComponent, LandingHeaderComponent],
})
export class LandingModule {}
