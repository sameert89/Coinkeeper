// src/app/guards/auth.guard.ts
import { Injectable, inject } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateFn,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../data-access/auth.service';
@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.authService.isLoggedIn().pipe(
      map((isValid) => {
        const isLoginRoute = state.url.includes('/login');

        if (isValid && isLoginRoute) {
          // User is already logged in and trying to access the login page, redirect to dashboard
          this.router.navigate(['/dashboard']);
          return false;
        } else if (!isValid && !isLoginRoute) {
          // User is not logged in and trying to access a restricted route, redirect to login
          this.router.navigate(['/login'], {
            queryParams: { returnUrl: state.url },
          });
          return false;
        }

        // Allow the navigation
        return true;
      })
    );
  }
}

export const AuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | boolean => {
  return inject(PermissionService).canActivate(next, state);
};
