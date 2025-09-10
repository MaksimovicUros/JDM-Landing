import { Component, Inject, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Observer } from 'gsap/Observer';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICustomersOverlay } from '../../customers-overlay.modal';

gsap.registerPlugin(ScrollToPlugin, Observer);

@Component({
  selector: 'app-customers-overlay',
  templateUrl: './customers-overlay.component.html',
  styleUrls: ['./customers-overlay.component.scss']
})
export class CustomersOverlayComponent implements AfterViewInit, OnDestroy {
   currentSection = 0;
   isScrolling = false;
   sections: HTMLElement[] = [];
   observer: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ICustomersOverlay, private dialogRef: MatDialogRef<CustomersOverlayComponent>) {}

  ngAfterViewInit() {
    // Wait for the view to initialize
    setTimeout(() => {
      this.initSmoothScrolling();
    });
  }

  goToLink() {
    window.open('https://meetings.hubspot.com/nikola-beloica/customer-meeting-jdm?uuid=7d94e523-ec3c-4297-a1f9-e6340c128705', '_blank');
  }

   initSmoothScrolling() {
    // Get all section elements
    this.sections = Array.from(document.querySelectorAll('.overlay-content section'));
    
    // Set up initial positions
    this.setupSections();
    
    // Create observer for wheel/touch events
    this.observer = Observer.create({
      target: window,
      type: 'wheel,touch',
      onPress: () => this.isScrolling = true,
      onRelease: () => this.isScrolling = false,
      onUp: () => this.handleScroll(-1),
      onDown: () => this.handleScroll(1),
      tolerance: 10,
      preventDefault: true
    });
    
    // Pause observer initially to prevent conflict with initial setup
    this.observer.disable();
    
    // Enable after a short delay
    setTimeout(() => {
      this.observer.enable();
    }, 500);
  }

   setupSections() {
    // Set initial positions for all sections except the first one
    this.sections.forEach((section, index) => {
      if (index > 0) {
        console.log(section)
        gsap.set(section, { y: '100%' });
      }
    });
  }

   handleScroll(direction: number) {
    if (this.isScrolling) return;
    
    const targetIndex = this.currentSection + direction;
    
    // Check if target index is valid
    if (targetIndex >= 0 && targetIndex < this.sections.length) {
      this.isScrolling = true;
      this.scrollToSection(targetIndex);
    }
  }

   scrollToSection(targetIndex: number) {
    const currentSection = this.sections[this.currentSection];
    const targetSection = this.sections[targetIndex];
    
    // Animate current section out and target section in
    gsap.to(currentSection, {
      y: targetIndex > this.currentSection ? '-100%' : '100%',
      duration: 0.8,
      ease: 'power2.inOut'
    });

    gsap.to(targetSection, {
      y: '0%',
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: () => {
        this.currentSection = targetIndex;
        this.isScrolling = false;
      }
    });
  }

  // Optional: Keyboard navigation
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      this.handleScroll(1);
      event.preventDefault();
    } else if (event.key === 'ArrowUp') {
      this.handleScroll(-1);
      event.preventDefault();
    }
  }

  close() {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.kill();
    }
  }
}