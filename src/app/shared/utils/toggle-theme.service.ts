import { BehaviorSubject } from 'rxjs';

// mode.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleThemeService {
  private modeSubject = new BehaviorSubject<string>('light'); // Initialize with default mode
  mode$ = this.modeSubject.asObservable();

  constructor() {}

  toggleMode() {
    this.modeSubject.next(this.modeSubject.value == 'light' ? 'dark' : 'light');
  }
  getMode() {
    return this.modeSubject.value;
  }
}
