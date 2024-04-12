import { NgIf } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { NavbarComponent } from '../../../dashboard/feature/navbar/navbar.component';
import { LogoutComponent } from '../../../shared/feature/logout/logout.component';
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
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    NgIf,
    LogoutComponent
  ],
  templateUrl: './transaction-container.component.html',
  styleUrl: './transaction-container.component.scss',
  providers: provideNativeDateAdapter(),
})
export class TransactionContainerComponent implements OnInit, AfterViewInit {
  isLoading = true;
  public date: any = {
    dateEnd: new Date(),
    dateStart: new Date(
      new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)
    ),
  };
  dateEnd = new FormControl(this.date.dateEnd);
  dateStart = new FormControl(this.date.dateStart);
  displayedColumns: string[] = [
    'description',
    'category',
    'date',
    'amount',
    'options',
  ];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog,
    private txnDL: TransactionDataLoaderService,
    private snackbar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.updateTable();
  }
  updateTable() {
    this.isLoading = true;
    this.txnDL
      .fetchTransactions(this.dateStart.value, this.dateEnd.value)
      .subscribe({
        next: (response: any) => {
          this.dataSource.data = response;
          this.isLoading = false;
          this.dataSource.paginator = this.paginator;
        },
        error: (error) => {
          console.log(error);
          this.isLoading = false;
        },
      });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  deleteTransaction(transaction: any): void {
    this.txnDL.deleteTransaction(transaction._id).subscribe({
      next: (response) => {
        this.snackbar.open('Transaction Deleted Successfully', 'Close');
        // console.log(this.dataSource.data.length);
        this.dataSource.data = this.dataSource.data.filter(
          (txn: any) => txn._id != transaction._id
        );
        // console.log(this.dataSource.data.length);
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.snackbar.open('Failed to delete transaction', 'Close');
        console.log(error);
      },
    });
  }
  openDialog(data: any): void {
    const dialogRef = this.dialog.open(TransactionEditDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteTransaction(data);
      }
    });
  }
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
  handleDateChange() {
    console.log('updating');
    this.updateTable();
  }
}
