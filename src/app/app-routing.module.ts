import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'customers',
    loadChildren: () =>
      import('./pages/customers/customers.module').then(m => m.CustomersModule),
  },
  {
    path: 'drivers',
    loadChildren: () =>
      import('./pages/drivers/drivers.module').then(m => m.DriversModule),
  },
  { path: '**', redirectTo: '' }                    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }