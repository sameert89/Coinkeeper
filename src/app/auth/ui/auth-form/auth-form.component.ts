import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StartButtonComponent } from '../../../shared/ui/start-button/start-button.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    StartButtonComponent,
  ],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss',
})
export class AuthFormComponent {
  constructor(private router: Router) {}
  title: string = 'Log In';
  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
