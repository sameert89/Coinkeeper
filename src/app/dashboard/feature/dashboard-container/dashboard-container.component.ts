import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ExpenseClassificationChartComponent } from '../../ui/expense-classification-chart/expense-classification-chart.component';
import { BudgetInfoComponent } from '../../ui/budget-info/budget-info.component';
@Component({
  selector: 'app-dashboard-container',
  standalone: true,
  imports: [NavbarComponent, ExpenseClassificationChartComponent, BudgetInfoComponent],
  templateUrl: './dashboard-container.component.html',
  styleUrl: './dashboard-container.component.scss'
})
export class DashboardContainerComponent {

}
