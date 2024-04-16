import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';

import { StartButtonComponent } from '../../../shared/ui/start-button/start-button.component';
import { AuthService } from '../../data-access/auth.service';
import { LoginFormModel } from '../../data-access/login-form.model';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    StartButtonComponent,
    RouterModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}
  title: string = 'Log In';
  email: string = '';
  password: string = '';
  loginUser(): void {
    let loginFormData = new LoginFormModel(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
    this.authService.loginUser(loginFormData).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.snackBar.open(
          'Login Failed, Please Check Your Credentials',
          'Close'
        );
      },
    });
  }
  loginForm!: FormGroup;
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(this.email, [
        Validators.email,
        Validators.required,
      ]),
      password: new FormControl(this.password, [Validators.required]),
    });
  }
}
