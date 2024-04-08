import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TransactionDataModel } from '../../../expense-adder/data-access/transaction-data.model';

@Component({
  selector: 'app-transaction-edit-dialog',
  standalone: true,
  imports: [],
  templateUrl: './transaction-edit-dialog.component.html',
  styleUrl: './transaction-edit-dialog.component.scss',
})
export class TransactionEditDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: TransactionDataModel) {}
}
