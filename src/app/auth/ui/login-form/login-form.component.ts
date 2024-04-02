import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StartButtonComponent } from '../../../shared/ui/start-button/start-button.component';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    StartButtonComponent,
    RouterModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  constructor(private router: Router) {}
  title: string = 'Log In';
  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
