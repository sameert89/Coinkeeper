import { Component, OnInit } from '@angular/core';
import {
    MAT_DIALOG_DATA, MatDialog, MatDialogContent, MatDialogModule
} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

import { NavbarComponent } from '../../../dashboard/feature/navbar/navbar.component';
import { TransactionDataLoaderService } from '../../data-access/transaction-data-loader.service';
import {
    TransactionEditDialogComponent
} from '../../ui/transaction-edit-dialog/transaction-edit-dialog.component';

@Component({
  selector: 'app-transaction-container',
  standalone: true,
  imports: [
    MatDialogModule,
    TransactionEditDialogComponent,
    MatTableModule,
    NavbarComponent,
  ],
  templateUrl: './transaction-container.component.html',
  styleUrl: './transaction-container.component.scss',
})
export class TransactionContainerComponent implements OnInit {
  public date: any = {
    dateEnd: new Date(),
    dateStart: new Date(
      new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)
    ),
  };

  displayedColumns: string[] = [
    'description',
    'category',
    'date',
    'amount',
    'options',
  ];
  dataSource: any = [];

  constructor(
    public dialog: MatDialog,
    private txnDL: TransactionDataLoaderService
  ) {}
  ngOnInit(): void {
    this.txnDL
      .fetchTransactions(this.date.dateStart, this.date.dateEnd)
      .subscribe({
        next: (response: any) => {
          console.log(response);
          this.dataSource = response;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  openDialog() {
    const dialogRef = this.dialog.open(TransactionEditDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  }
}
