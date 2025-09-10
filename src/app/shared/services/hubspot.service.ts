import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export {};

declare global {
  interface Window {
    HubSpotConversations?: {
      widget: {
        open(): void;
        close(): void;
        show?(): void;
        hide?(): void;
        remove(): void;
        load(opts?: Record<string, unknown>): void;
        refresh?(): void;
        resetAndReloadWidget?(): void;
      };
      on(event: string, cb: (payload?: unknown) => void): void;
    };
    hsConversationsOnReady?: Array<() => void>;
    _hsq?: any[];
  }
}

function onConversationsAPIReady(cb: () => void) {
  if (window.HubSpotConversations) {
    cb();
  } else {
    window.hsConversationsOnReady = window.hsConversationsOnReady || [];
    window.hsConversationsOnReady.push(cb);
  }
}

@Injectable({ providedIn: 'root' })
export class HubspotChatService {
  private router = inject(Router);

  constructor() {
    // Automatically refresh widget on SPA route change
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        const _hsq = (window._hsq = window._hsq || []);
        _hsq.push(['setPath', e.urlAfterRedirects]);
        _hsq.push(['trackPageView']);

        onConversationsAPIReady(() => {
          window.HubSpotConversations?.widget?.refresh?.();
        });
      });
  }

  open() {
    onConversationsAPIReady(() => window.HubSpotConversations!.widget.open());
  }

  close() {
    onConversationsAPIReady(() => window.HubSpotConversations!.widget.close());
  }

  hideCompletely() {
    onConversationsAPIReady(() => window.HubSpotConversations!.widget.remove());
  }

  showOrLoad() {
    onConversationsAPIReady(() => window.HubSpotConversations!.widget.load());
  }

  on(eventName: string, cb: (payload?: unknown) => void) {
    onConversationsAPIReady(() => window.HubSpotConversations!.on(eventName, cb));
  }
}
