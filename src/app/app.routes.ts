import { Routes } from '@angular/router';
import { AuthFormComponent } from './auth/ui/auth-form/auth-form.component';
import { SplashScreenComponent } from './landing/feature/splash-screen/splash-screen.component';
import { DashboardContainerComponent } from './dashboard/feature/dashboard-container/dashboard-container.component';
import { AddExpenseFormComponent } from './expense-adder/ui/add-expense-form/add-expense-form.component';

export const routes: Routes = [
  {
    path: '',
    component: SplashScreenComponent,
    data: { animation: 'splashPage' },
  },
  {
    path: 'auth',
    component: AuthFormComponent,
    data: { animation: 'authPage' },
  },
  {
    path: 'dashboard',
    component: DashboardContainerComponent,
    data: { animation: 'dashboardPage' },
  },
  {
    path: 'add-expense',
    component: AddExpenseFormComponent,
    data: { animation: 'expenseTrackerPage' },
  },
];
