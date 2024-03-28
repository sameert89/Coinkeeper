// toggle-theme.component.ts
import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToggleThemeService } from '../../utils/toggle-theme.service';

@Component({
  selector: 'app-toggle-theme',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss']
})
export class ToggleThemeComponent {
  themeIcon: string = 'wb_sunny';

  constructor(@Inject(DOCUMENT) private document: Document, private toggleThemeService: ToggleThemeService) {
    this.setInitialTheme();
  }

  toggleTheme() {
    const currentTheme = this.document.body.classList.contains('dark') ? 'dark' : 'light';
    if (currentTheme === 'dark') {
      this.document.body.classList.remove('dark');
      this.document.body.classList.add('light');
      this.themeIcon = 'wb_sunny'; // Show icon for dark mode switch
    } else {
      this.document.body.classList.remove('light');
      this.document.body.classList.add('dark');
      this.themeIcon = 'brightness_3'; // Show icon for light mode switch
    }
    this.toggleThemeService.toggleMode();
  }

  setInitialTheme() {
    if(!this.document.body.classList.contains('light') && !this.document.body.classList.contains('dark')){
      this.document.body.classList.add('light');
      this.toggleThemeService.toggleMode();
    }
  }
}
