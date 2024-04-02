import { Routes } from '@angular/router';
import { LoginFormComponent } from './auth/ui/login-form/login-form.component';
import { SplashScreenComponent } from './landing/feature/splash-screen/splash-screen.component';
import { DashboardContainerComponent } from './dashboard/feature/dashboard-container/dashboard-container.component';
import { AddExpenseFormComponent } from './expense-adder/ui/add-expense-form/add-expense-form.component';
import { RegisterFormComponent } from './auth/ui/register-form/register-form.component';
import { AuthGuard } from './auth/feature/auth.guard';
import { FaqComponent } from './help/ui/faq/faq.component';

export const routes: Routes = [
  {
    path: '',
    component: SplashScreenComponent,
    data: { animation: 'splashPage' },
  },
  {
    path: 'login',
    component: LoginFormComponent,
    data: { animation: 'loginPage' },
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: RegisterFormComponent,
    data: { animation: 'registerPage' },
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardContainerComponent,
    data: { animation: 'dashboardPage' },
    canActivate: [AuthGuard],
  },
  {
    path: 'add-expense',
    component: AddExpenseFormComponent,
    data: { animation: 'expenseTrackerPage' },
    canActivate: [AuthGuard],
  },
  {
    path: 'faq',
    component: FaqComponent,
    data: { animation: 'faqPage' },
  },
];
