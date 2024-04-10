import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { categories } from '../../../shared/utils/constants';

@Component({
  selector: 'app-budget-info',
  standalone: true,
  imports: [
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
  templateUrl: './budget-info.component.html',
  styleUrl: './budget-info.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class BudgetInfoComponent {
  categories: Map<string, string> = categories;
  @Input() budgetInfo = {
    totalSpent: 22500,
    budget: 36000,
    topCategoryName: '',
  };
  today = new Date();
  @Output() dateChangeEvent = new EventEmitter<Date>();
  date = new Date();

  openDatePicker(dp: any) {
    dp.open();
  }

  closeDatePicker(eventData: any, dp?: any) {
    // get month and year from eventData and close datepicker, thus not allowing
    // user to select date
    this.date = new Date(eventData);
    this.dateChangeEvent.emit(new Date(eventData));
    dp.close();
  }
}
