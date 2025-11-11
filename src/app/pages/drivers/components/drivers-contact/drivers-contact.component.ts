import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { DriversContactService } from './drivers-contact.service';

@Component({
  selector: 'app-drivers-contact',
  templateUrl: './drivers-contact.component.html',
  styleUrls: ['./drivers-contact.component.scss'],
})
export class DriversContactComponent {
  contactService = inject(DriversContactService);

  form: FormGroup;
  acceptTermsControl = new FormControl(false);

  positions = [
    'Rent to Run',
    'Owner Operator',
    'Solo Company Driver',
    'Team Company Driver',
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      zip: ['', Validators.required],
      state: ['', Validators.required],
      cdlType: ['', Validators.required],
      position: ['', Validators.required],
      message: [''],
    });
  }

  ngAfterViewInit() {
    // fix an autoplay policy issue.
    const video = document.getElementById(
      'contact-drivers-video'
    ) as HTMLVideoElement;
    if (video) {
      video.muted = true;
      video.play().catch((err) => {
        console.log('Autoplay blocked:', err);
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = new FormData();
      Object.entries(this.form.value).forEach(([key, value]) => {
        if (value) formData.append(key, value as any);
      });

      this.contactService.submitContact(formData).subscribe({
        next: () => alert('Form sent successfully!'),
        error: (err) => alert('Error sending form.'),
      });
    }
  }
}
