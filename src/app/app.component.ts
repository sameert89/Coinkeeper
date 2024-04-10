import { Subscription } from 'rxjs';

import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  ChildrenOutletContexts,
  RouterLink,
  RouterOutlet,
} from '@angular/router';

import { fader, slideInAnimation } from './animations';
import { SplashScreenComponent } from './landing/feature/splash-screen/splash-screen.component';
import { ToggleThemeComponent } from './shared/feature/toggle-theme/toggle-theme.component';
import { ToggleThemeService } from './shared/utils/toggle-theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    SplashScreenComponent,
    ToggleThemeComponent,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [fader],
})
export class AppComponent {
  title = 'Coinkeeper';
  mode: string = 'dark';
  themeSubscription!: Subscription;

  constructor(
    private toggleThemeService: ToggleThemeService,
    private contexts: ChildrenOutletContexts
  ) {}
  ngOnInit() {
    this.themeSubscription = this.toggleThemeService.mode$.subscribe((mode) => {
      this.mode = mode;
    });
  }
  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
