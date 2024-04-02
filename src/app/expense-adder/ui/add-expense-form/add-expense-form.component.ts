import { Component } from '@angular/core';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { categories } from '../../../shared/utils/constants';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { NavbarComponent } from '../../../dashboard/feature/navbar/navbar.component';
import { SpeechInputDialogComponent } from './speech-input-dialog/speech-input-dialog.component';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ExpenseFormDataModel } from '../../data-access/expense-form-data.model';

@Component({
  selector: 'app-add-expense-form',
  standalone: true,
  imports: [
    NavbarComponent,
    MatDatepickerModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatLabel,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-expense-form.component.html',
  styleUrl: './add-expense-form.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class AddExpenseFormComponent {
  categories: Map<string, string> = categories;
  expenseFormData: ExpenseFormDataModel = {
    category: this.categories.keys().next().value,
    expenseName: '',
    value: 0,
    date: new Date(),
  };
  speechDataFromDialog = '';

  expenseFormGroup = new FormGroup({
    expenseName: new FormControl(this.expenseFormData.expenseName, [
      Validators.required,
    ]),
    value: new FormControl(this.expenseFormData.value, [
      Validators.required,
      Validators.min(1),
    ]),
    date: new FormControl(this.expenseFormData.date),
  });

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(SpeechInputDialogComponent, {
      width: '30em',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.speechDataFromDialog = result;
      console.log(this.speechDataFromDialog);
    });
  }
}
