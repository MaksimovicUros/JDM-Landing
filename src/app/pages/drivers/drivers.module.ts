import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { driversRoute } from './drivers.route';
import { SharedModule } from 'src/app/shared/shared.module';

import { DriversComponent } from './drivers.component';
import { CommonModule } from '@angular/common';
import { DriversBannerComponent } from './components/drivers-banner/drivers-banner.component';
import { DriversHeaderComponent } from './components/drivers-header/drivers-header.component';
import { DriversMakeDifferenceComponent } from './components/drivers-make-difference/drivers-make-difference.component';
import { DriversSoloComponent } from './pages/drivers-solo/drivers-solo.component';
import { DriversFooterNavComponent } from './components/drivers-footer-nav/drivers-footer-nav.component';
import { DriversTeamComponent } from './pages/drivers-team/drivers-team.component';
import { DriversShowcaseBoxesComponent } from './components/drivers-showcase-boxes/drivers-showcase-boxes.component';
import { OwnerOperatorsComponent } from './pages/owner-operators/owner-operators.component';
import { RentEquipmentComponent } from './pages/rent-equipment/rent-equipment.component';
import { WayUpComponent } from './components/way-up/way-up.component';
import { DedicatedLanesComponent } from './pages/dedicated-lanes/dedicated-lanes.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DriversContactComponent } from './components/drivers-contact/drivers-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TermsOfConditionComponent } from './pages/terms-of-condition/terms-of-condition.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';


@NgModule({
  imports: [CommonModule, RouterModule.forChild(driversRoute), SharedModule, ReactiveFormsModule, FormsModule],
  declarations: [
    DriversComponent, 
    DriversBannerComponent,
    DriversHeaderComponent,
    DriversMakeDifferenceComponent,
    DriversSoloComponent,
    DriversFooterNavComponent,
    DriversTeamComponent,
    OwnerOperatorsComponent,
    DriversShowcaseBoxesComponent,
    RentEquipmentComponent,
    WayUpComponent,
    DedicatedLanesComponent,
    BlogComponent,
    DriversContactComponent,
    TermsOfConditionComponent,
    PrivacyPolicyComponent
  ],
})
export class DriversModule {}
