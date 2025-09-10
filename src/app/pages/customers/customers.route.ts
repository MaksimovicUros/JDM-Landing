import { Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomersContactComponent } from './pages/customers-contact.component';

export const customersRoute: Routes = [
  {
    path: '',
    component: CustomersComponent,
  },
  {
    path: 'contact',
    component: CustomersContactComponent
  }
];
