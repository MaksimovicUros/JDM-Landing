import { Component } from '@angular/core';

@Component({
  selector: 'app-drivers-header',
  templateUrl: './drivers-header.component.html',
  styleUrls: ['./drivers-header.component.scss']
})
export class DriversHeaderComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
