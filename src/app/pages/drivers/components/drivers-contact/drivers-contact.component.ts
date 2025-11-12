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
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      zipcode: ['', Validators.required],
      state: ['', Validators.required],
      cdltype: ['', Validators.required],
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
    // this.contactService.getToken().subscribe((res) => console.log(res));
    if (this.form.valid) {
      const formData = {
        fields: [
          { name: 'firstname', value: this.form.value.firstname },
          { name: 'lastname', value: this.form.value.lastname },
          { name: 'email', value: this.form.value.email },
          { name: 'phone', value: this.form.value.phone },
          { name: 'zip', value: this.form.value.zipcode },
          { name: 'cdltype', value: this.form.value.cdltype },
          { name: 'position', value: this.form.value.position },
          { name: 'message', value: this.form.value.message },
        ],
      };

      this.contactService.submitContact(formData).subscribe({
        next: () => alert('Form sent successfully!'),
        error: (err) => alert('Error sending form.'),
      });
    }
  }
}
