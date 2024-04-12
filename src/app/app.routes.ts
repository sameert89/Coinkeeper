import { Routes } from '@angular/router';

import { AuthGuard } from './auth/feature/auth.guard';
import { LoginFormComponent } from './auth/ui/login-form/login-form.component';
import { RegisterFormComponent } from './auth/ui/register-form/register-form.component';
import {
    DashboardContainerComponent
} from './dashboard/feature/dashboard-container/dashboard-container.component';
import {
    AddExpenseFormComponent
} from './expense-adder/feature/add-expense-form/add-expense-form.component';
import { FaqComponent } from './help/ui/faq/faq.component';
import { SplashScreenComponent } from './landing/feature/splash-screen/splash-screen.component';
import {
    ProfileContainerComponent
} from './profile/feature/profile-container/profile-container.component';
import {
    TransactionContainerComponent
} from './transactions/feature/transaction-container/transaction-container.component';

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
    path: 'help',
    component: FaqComponent,
    data: { animation: 'faqPage' },
  },
  {
    path: 'transactions',
    component: TransactionContainerComponent,
    data: { animation: 'transactionsPage' },
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileContainerComponent,
    data: { animation: 'profilePage' },
    canActivate: [AuthGuard]
  },
];
