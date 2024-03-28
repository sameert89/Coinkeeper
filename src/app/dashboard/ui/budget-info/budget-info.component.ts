import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-budget-info',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './budget-info.component.html',
  styleUrl: './budget-info.component.scss',
})
export class BudgetInfoComponent {
  totalSpent: number = 22500;
  budget: number = 36000;
  topCategoryName: string = '';
  topCategoryIcon: string = '';
}
