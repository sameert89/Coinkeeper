import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToggleThemeService } from './shared/utils/toggle-theme.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/data-access/auth.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    ToggleThemeService,
    AuthService,
  ],
};
