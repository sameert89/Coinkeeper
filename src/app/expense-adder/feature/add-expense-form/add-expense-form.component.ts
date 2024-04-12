import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
    FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NavbarComponent } from '../../../dashboard/feature/navbar/navbar.component';
import { LogoutComponent } from '../../../shared/feature/logout/logout.component';
import { categories } from '../../../shared/utils/constants';
import { AddExpenseService } from '../../data-access/add-expense.service';
import {
    SpeechDataInterpreterWebService
} from '../../data-access/speech-data-interpreter-web.service';
import { TransactionDataModel } from '../../data-access/transaction-data.model';
import {
    SpeechInputDialogComponent
} from '../../ui/speech-input-dialog/speech-input-dialog.component';

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
    FormsModule,
    CommonModule,
    LogoutComponent
  ],
  templateUrl: './add-expense-form.component.html',
  styleUrl: './add-expense-form.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class AddExpenseFormComponent {
  categories: string[] = Array.from(categories.keys());
  expenseFormData: TransactionDataModel = {
    category: 'Emergency',
    description: '',
    amount: 0,
    date: new Date(),
  };

  expenseFormGroup = new FormGroup({
    description: new FormControl(this.expenseFormData.description, [
      Validators.required,
    ]),
    amount: new FormControl(this.expenseFormData.amount, [
      Validators.required,
      Validators.min(1),
    ]),
    category: new FormControl(this.expenseFormData.category),
    date: new FormControl(this.expenseFormData.date),
  });

  constructor(
    public dialog: MatDialog,
    private speechDataInterpreter: SpeechDataInterpreterWebService,
    private addExpenseService: AddExpenseService,
    private snackBar: MatSnackBar
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(SpeechInputDialogComponent, {
      width: '30em',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result != '') this.fillFormFromVoice(result);
    });
  }
  fillFormFromVoice(speechText: string): void {
    this.speechDataInterpreter.interpretData(speechText).subscribe({
      next: ({ interpretedData }) => {
        if (interpretedData.search('null') != -1) return;
        const dataArray = interpretedData.split(',');
        console.log(dataArray);
        this.expenseFormGroup.patchValue({
          description: dataArray[1],
          amount: parseInt(dataArray[2]),
          category: dataArray[0],
        });
      },
    });
  }
  createTransaction(): void {
    const data = new TransactionDataModel(
      this.expenseFormGroup.value.description!,
      this.expenseFormGroup.value.category!,
      this.expenseFormGroup.value.amount!,
      this.expenseFormGroup.value.date!
    );
    this.addExpenseService.createTransaction(data).subscribe({
      next: (response) => {
        this.snackBar.open('Transaction Added Succesfully ✅', 'Close');
      },
      error: (error) => {
        this.snackBar.open(
          'Could not add transaction, please check your network ❌',
          'Close'
        );
        console.log(error);
      },
    });
  }
}
