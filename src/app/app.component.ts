import { Component, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { HubspotChatService } from './shared/services/hubspot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JDM-app'

  chat = inject(HubspotChatService);
  private router = inject(Router);

  constructor() {
    const HIDE_ON = [/^\/checkout/, /^\/admin/, /^\/auth/];

    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        const url = e.urlAfterRedirects;
        const shouldHide = HIDE_ON.some((rx) => rx.test(url));
        shouldHide ? this.chat.hideCompletely() : this.chat.showOrLoad();
      });
  }
}
