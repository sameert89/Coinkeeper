import { Component } from '@angular/core';
import { TitleComponent } from '../../ui/title/title.component';
import { StartButtonComponent } from '../../../shared/ui/start-button/start-button.component';
import { ToggleThemeComponent } from '../../../shared/feature/toggle-theme/toggle-theme.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [TitleComponent, StartButtonComponent, ToggleThemeComponent],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss',
})
export class SplashScreenComponent {
  constructor(private router: Router) {}

  navigateToAuth(): void {
    this.router.navigate(['/login']);
  }
}
