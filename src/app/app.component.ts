import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation, fader } from './animations';
import { SplashScreenComponent } from './landing/feature/splash-screen/splash-screen.component';
import { ToggleThemeComponent } from './shared/feature/toggle-theme/toggle-theme.component';
import { ToggleThemeService } from './shared/utils/toggle-theme.service';
import { NgIf } from '@angular/common';

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
  mode: string = 'cool';

  constructor(
    private toggleThemeService: ToggleThemeService,
    private contexts: ChildrenOutletContexts
  ) {}
  ngOnInit() {
    this.toggleThemeService.mode$.subscribe((mode) => {
      this.mode = mode;
    });
  }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
