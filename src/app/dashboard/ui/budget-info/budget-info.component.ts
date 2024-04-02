import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { categories } from '../../../shared/utils/constants';

@Component({
  selector: 'app-budget-info',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './budget-info.component.html',
  styleUrl: './budget-info.component.scss',
})
export class BudgetInfoComponent {
  categories: Map<string, string> = categories;
  @Input() budgetInfo = {
    totalSpent: 22500,
    budget: 36000,
    topCategoryName: '',
  };
}
