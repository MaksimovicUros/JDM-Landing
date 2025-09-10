import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DriversContactService {
  private apiUrl = '/api/contact';

  constructor(private http: HttpClient) {}

  submitContact(formData: FormData) {
    return this.http.post(this.apiUrl, formData);
  }
}