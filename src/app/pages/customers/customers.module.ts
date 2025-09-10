import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { customersRoute } from './customers.route';
import { CustomersHeaderComponent } from './components/customers-header/customers-header.component';
import { CustomersBannerComponent } from './components/customers-banner/customers-banner.component';
import { CustomerClientsComponent } from './components/customers-clients/customer-clients.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomersNumbersComponent } from './components/customers-numbers/customers-numbers.component';
import { CustomersServiceComponent } from './components/customers-service/customers-service.component';
import { CustomersOverlayComponent } from './components/customers-overlay/customers-overlay.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { CustomersContactComponent } from './pages/customers-contact.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule, RouterModule.forChild(customersRoute), SharedModule, MatDialogModule, ReactiveFormsModule],
  declarations: [
    CustomersComponent, 
    CustomersHeaderComponent, 
    CustomersBannerComponent,
    CustomerClientsComponent,
    CustomersNumbersComponent,
    CustomersServiceComponent,
    CustomersOverlayComponent,
    CustomersContactComponent
  ],
})
export class CustomersModule {}
