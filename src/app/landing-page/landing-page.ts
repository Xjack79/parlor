import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage implements OnInit, OnDestroy {
  currentYear: number = new Date().getFullYear();
  isMenuCollapsed = true;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.loadThirdPartyScripts();
    }
  }

  ngOnDestroy() {
    // Clean up any third-party script events if needed
  }

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  onSubscribe(event: Event) {
    event.preventDefault();
    // Handle subscription logic
    console.log('Subscription form submitted');
  }

  private loadThirdPartyScripts() {
    // Third-party scripts will be loaded via angular.json or index.html
    // Initialization will happen in ngAfterViewInit if needed
  }
}
