import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

import { TransactionDataModel } from '../../../expense-adder/data-access/transaction-data.model';

@Component({
  selector: 'app-transaction-edit-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './transaction-edit-dialog.component.html',
  styleUrl: './transaction-edit-dialog.component.scss',
})
export class TransactionEditDialogComponent {
  constructor(public dialogRef: MatDialogRef<TransactionEditDialogComponent>) {}
}
