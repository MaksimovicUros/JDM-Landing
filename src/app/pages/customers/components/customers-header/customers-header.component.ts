import { Component } from '@angular/core';

@Component({
  selector: 'app-customers-header',
  templateUrl: './customers-header.component.html',
  styleUrls: ['./customers-header.component.scss']
})
export class CustomersHeaderComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
