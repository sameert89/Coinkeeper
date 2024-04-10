import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleThemeService {
  private modeSubject = new BehaviorSubject<string>('light'); // Initialize with default mode
  mode$ = this.modeSubject.asObservable();

  constructor() {
    this.loadInitialTheme();
  }

  toggleMode() {
    const newMode = this.modeSubject.value === 'light' ? 'dark' : 'light';
    this.modeSubject.next(newMode);
    localStorage.setItem('theme', newMode);
  }

  getMode() {
    return this.modeSubject.value;
  }

  private loadInitialTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.modeSubject.next(savedTheme);
  }
}
