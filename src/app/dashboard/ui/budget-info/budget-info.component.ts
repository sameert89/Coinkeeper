import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { categories } from '../../../shared/utils/constants';
import { DatePickerStateService } from '../../data-access/date-picker-state.service';

@Component({
  selector: 'app-budget-info',
  standalone: true,
  imports: [
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    DatePipe,
  ],
  templateUrl: './budget-info.component.html',
  styleUrl: './budget-info.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class BudgetInfoComponent {
  constructor(private datePickerStateService: DatePickerStateService) {}
  categories: Map<string, string> = categories;
  @Input() budgetInfo = {
    totalSpent: 0,
    budget: 36000,
    topCategoryName: '',
  };
  today = new Date();
  @Output() dateChangeEvent = new EventEmitter<Date>();
  date?: Date;
  ngOnInit() {
    this.date = this.datePickerStateService.selectedDate || new Date();
  }

  openDatePicker(dp: any) {
    dp.open();
  }

  closeDatePicker(eventData: any, dp?: any) {
    // get month and year from eventData and close datepicker, thus not allowing
    // user to select date
    this.datePickerStateService.selectedDate = new Date(eventData);
    this.dateChangeEvent.emit(new Date(eventData));
    dp.close();
  }
}
