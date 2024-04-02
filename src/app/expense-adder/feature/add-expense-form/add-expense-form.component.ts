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
import { SpeechInputDialogComponent } from '../../ui/speech-input-dialog/speech-input-dialog.component';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormsModule,
} from '@angular/forms';
import { ExpenseFormDataModel } from '../../data-access/expense-form-data.model';
import { SpeechDataInterpreterWebService } from '../../data-access/speech-data-interpreter-web.service';
import { CommonModule } from '@angular/common';

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
  ],
  templateUrl: './add-expense-form.component.html',
  styleUrl: './add-expense-form.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class AddExpenseFormComponent {
  categories: string[] = Array.from(categories.keys());
  expenseFormData: ExpenseFormDataModel = {
    category: 'Emergency',
    expenseName: '',
    value: 0,
    date: new Date(),
  };

  expenseFormGroup = new FormGroup({
    expenseName: new FormControl(this.expenseFormData.expenseName, [
      Validators.required,
    ]),
    value: new FormControl(this.expenseFormData.value, [
      Validators.required,
      Validators.min(1),
    ]),
    category: new FormControl(this.expenseFormData.category),
    date: new FormControl(this.expenseFormData.date),
  });

  constructor(
    public dialog: MatDialog,
    private speechDataInterpreter: SpeechDataInterpreterWebService
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
          expenseName: dataArray[1],
          value: parseInt(dataArray[2]),
          category: dataArray[0],
        });
      },
    });
  }
  // For the dumb mat select
}
