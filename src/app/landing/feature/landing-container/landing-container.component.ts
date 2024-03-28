import { Component } from '@angular/core';
import { ToggleThemeComponent } from '../../../shared/feature/toggle-theme/toggle-theme.component';
import { SplashScreenComponent } from '../splash-screen/splash-screen.component';
import { RouterOutlet } from '@angular/router';
import { ToggleThemeService } from '../../../shared/utils/toggle-theme.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-landing-container',
  standalone: true,
  imports: [SplashScreenComponent, ToggleThemeComponent, RouterOutlet, NgIf],
  templateUrl: './landing-container.component.html',
  styleUrl: './landing-container.component.scss'
})
export class LandingContainerComponent {
  mode:string = 'cool';
  constructor(private toggleThemeService: ToggleThemeService){}
  ngOnInit() {
    this.toggleThemeService.mode$.subscribe(mode => {
      this.mode = mode;
    });
  }
}
