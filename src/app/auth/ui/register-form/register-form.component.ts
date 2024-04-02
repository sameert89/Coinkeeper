import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StartButtonComponent } from '../../../shared/ui/start-button/start-button.component';
import { Router, RouterModule } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../data-access/auth.service';
import { RegisterFormModel } from '../../data-access/register-form.model';
@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    StartButtonComponent,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent {
  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private authService: AuthService
  ) {}
  title: string = 'Register';
  email: string = '';
  name: string = '';
  password: string = '';
  confirmPassword: string = '';
  registerForm!: FormGroup;
  registerUser(): void {
    let registrationData = new RegisterFormModel(
      this.registerForm.value.name,
      this.registerForm.value.email,
      this.registerForm.value.password
    );
    console.log(registrationData);
    this.authService.registerUser(registrationData).subscribe({
      next: () => {
        this._snackBar.open('Registered Successfuly Please Login', 'Close', {
          duration: 2000,
        });
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: (error) => {
        this._snackBar.open('Error Registering', 'Close', {
          duration: 2000,
        });
      },
    });
  }
  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl(this.email, [Validators.email]),
      name: new FormControl(this.name, Validators.required),
      password: new FormControl(this.password, Validators.required),
      confirmPassword: new FormControl(
        this.confirmPassword,
        Validators.required
      ),
    });
  }
}
