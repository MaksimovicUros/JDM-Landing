import { Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[appActiveLink]'
})
export class ActiveLinkDirective implements OnInit {
  @Input('appActiveLink') linkUrl!: string;

  @HostBinding('class.link-active') isActive = false;

  constructor(private router: Router, private el: ElementRef) {}

  ngOnInit(): void {
    this.checkActive(this.router.url);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.checkActive(event.urlAfterRedirects);
      });
  }

  private checkActive(currentUrl: string) {
    this.isActive = currentUrl === this.linkUrl;
  }
}
