import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ExpenseClassificationChartComponent } from '../../ui/expense-classification-chart/expense-classification-chart.component';
import { BudgetInfoComponent } from '../../ui/budget-info/budget-info.component';
import { CategoryExpenditureGridComponent } from '../category-expenditure-grid/category-expenditure-grid.component';


@Component({
  selector: 'app-dashboard-container',
  standalone: true,
  imports: [
    NavbarComponent,
    ExpenseClassificationChartComponent,
    BudgetInfoComponent,
    CategoryExpenditureGridComponent
  ],
  templateUrl: './dashboard-container.component.html',
  styleUrl: './dashboard-container.component.scss'
})
export class DashboardContainerComponent {

}
