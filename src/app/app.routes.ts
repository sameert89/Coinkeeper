import { Routes } from '@angular/router';
import { LandingContainerComponent } from './landing/feature/landing-container/landing-container.component';
import { AuthFormComponent } from './auth/ui/auth-form/auth-form.component';
import { SplashScreenComponent } from './landing/feature/splash-screen/splash-screen.component';
import { DashboardContainerComponent } from './dashboard/feature/dashboard-container/dashboard-container.component';

export const routes: Routes = [
    {path: '', component: LandingContainerComponent, children:[{
        path: '', redirectTo: 'home', pathMatch: 'full'
    },{
        path: 'home', component: SplashScreenComponent
    },
    {
        path: 'auth', component: AuthFormComponent
    },
    {
      path: 'dashboard', component: DashboardContainerComponent
    }
]}
];
