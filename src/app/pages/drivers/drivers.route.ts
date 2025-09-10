import { Routes } from '@angular/router';
import { DriversComponent } from './drivers.component';
import { DriversSoloComponent } from './pages/drivers-solo/drivers-solo.component';
import { DriversTeamComponent } from './pages/drivers-team/drivers-team.component';
import { OwnerOperatorsComponent } from './pages/owner-operators/owner-operators.component';
import { RentEquipmentComponent } from './pages/rent-equipment/rent-equipment.component';
import { DedicatedLanesComponent } from './pages/dedicated-lanes/dedicated-lanes.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DriversContactComponent } from './components/drivers-contact/drivers-contact.component';
import { TermsOfConditionComponent } from './pages/terms-of-condition/terms-of-condition.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

export const driversRoute: Routes = [
  {
    path: '',
    component: DriversComponent,
  },
  {
    path: 'solo',
    component: DriversSoloComponent,
  },
  {
    path: 'team',
    component: DriversTeamComponent,
  },
  {
    path: 'owner-operators',
    component: OwnerOperatorsComponent,
  },
  {
    path: 'rent-equipment',
    component: RentEquipmentComponent,
  },
  {
    path: 'dedicated-lanes',
    component: DedicatedLanesComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'contact',
    component: DriversContactComponent,
  },
  {
    path: 'terms-of-condition',
    component: TermsOfConditionComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  }
];
