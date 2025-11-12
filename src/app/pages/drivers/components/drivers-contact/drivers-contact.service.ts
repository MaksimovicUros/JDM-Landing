import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DriversContactService {
  constructor(private http: HttpClient) {}

  submitContact(formData: any) {
    const portalId = 146790673;
    const formGuid = 'e30c06ae-7606-43a3-aeb3-4c9d760d5c4f';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(
      `https://api-eu1.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      formData,
      { headers }
    );
  }

  getToken() {
    const headers = new HttpHeaders({
      Authorization: 'Basic SVZTb2x1dGlvbjoxUzBsdXQxMG4yQDIy',
      'Content-Type': 'application/json',
    });

    return this.http.get(`https://extend.jdmexpedite.com/api/login/hubtoken`, {
      headers,
    });
  }
}
