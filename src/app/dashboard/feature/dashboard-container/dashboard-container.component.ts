import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ExpenseClassificationChartComponent } from '../../ui/expense-classification-chart/expense-classification-chart.component';
import { BudgetInfoComponent } from '../../ui/budget-info/budget-info.component';
import { CategoryExpenditureGridComponent } from '../category-expenditure-grid/category-expenditure-grid.component';
import { DashboardDataLoaderService } from '../../data-access/dashboard-data-loader.service';
import { DashboardComponentDataModel } from '../../data-access/dashboard-component-data.model';
import { BudgetInfoComponentDataModel } from '../../data-access/budget-info-component-data.model';

@Component({
  selector: 'app-dashboard-container',
  standalone: true,
  imports: [
    NavbarComponent,
    ExpenseClassificationChartComponent,
    BudgetInfoComponent,
    CategoryExpenditureGridComponent,
  ],
  templateUrl: './dashboard-container.component.html',
  styleUrl: './dashboard-container.component.scss',
})
export class DashboardContainerComponent {
  dashboardComponentData: DashboardComponentDataModel =
    new DashboardComponentDataModel(
      new BudgetInfoComponentDataModel(0, 0, ''),
      [],
      []
    );
  constructor(private dashboardDataLoader: DashboardDataLoaderService) {}
  ngOnInit() {
    this.dashboardDataLoader.fetchData().subscribe({
      next: (data) => {
        console.log(data);
        this.dashboardComponentData = data;
      },
    });
    // this.dashboardComponentData = new DashboardComponentDataModel();

    // this.dashboardComponentData.budgetInfo = new BudgetInfoComponentDataModel();
    // this.dashboardComponentData.budgetInfo.totalSpent = 46500;
    // this.dashboardComponentData.budgetInfo.budget = 50000;
    // this.dashboardComponentData.budgetInfo.topCategoryName = 'Shopping';

    // this.dashboardComponentData.categorywiseExpenditureValues = new Array(
    //   categories.size
    // ).fill(0);
    // this.dashboardComponentData.chartData =
    // [
    //   { name: 'Food', value: 2000 },
    //   { name: 'Travel', value: 1000 },
    //   { name: 'Shopping', value: 2000 },
    //   { name: 'Games', value: 4000 },
    //   { name: 'Recharges', value: 5000 },
    //   { name: 'Bills', value: 7000 },
    //   { name: 'Rent', value: 8000 },
    //   { name: 'EMIs', value: 10000 },
    //   { name: 'Groceries', value: 6000 },
    //   { name: 'Workers', value: 1000 },
    //   { name: 'Health', value: 0 },
    //   { name: 'Study', value: 500 }
    // ];
  }
}
