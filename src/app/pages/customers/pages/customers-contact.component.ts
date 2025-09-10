import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customers-contact',
  templateUrl: './customers-contact.component.html',
  styleUrls: ['./customers-contact.component.scss']
})
export class CustomersContactComponent {
   contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
      companyName: [''],
      message: ['']
    });
  }

  ngAfterViewInit() {
    // fix an autoplay policy issue.
    const video = document.getElementById('drivers-cover-mobile') as HTMLVideoElement;
    if (video) {
      video.muted = true;
      video.play().catch(err => {
        console.log('Autoplay blocked:', err);
      });
    }
  }

  submit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
