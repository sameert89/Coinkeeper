import { Routes } from '@angular/router';
import { LoginFormComponent } from './auth/ui/login-form/login-form.component';
import { SplashScreenComponent } from './landing/feature/splash-screen/splash-screen.component';
import { DashboardContainerComponent } from './dashboard/feature/dashboard-container/dashboard-container.component';
import { AddExpenseFormComponent } from './expense-adder/ui/add-expense-form/add-expense-form.component';
import { RegisterFormComponent } from './auth/ui/register-form/register-form.component';

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
  },
  {
    path: 'register',
    component: RegisterFormComponent,
    data: { animation: 'registerPage' },
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
