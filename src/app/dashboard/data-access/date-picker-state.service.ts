// src/app/services/date-picker-state.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatePickerStateService {
  private _selectedDate: Date;
  constructor(){
    this._selectedDate = new Date();
  }

  get selectedDate(): Date {
    return this._selectedDate;
  }

  set selectedDate(value: Date) {
    this._selectedDate = value;
  }
}
