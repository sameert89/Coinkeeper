import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-container',
  standalone: true,
  imports: [],
  templateUrl: './profile-container.component.html',
  styleUrl: './profile-container.component.scss',
})
export class ProfileContainerComponent {
  name: string = '';
  email: string = '';
  budget: number = 0;
  customCategories: string[] = [];
}
