import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { BudgetInfoComponentDataModel } from '../../data-access/budget-info-component-data.model';
import { DashboardComponentDataModel } from '../../data-access/dashboard-component-data.model';
import { DashboardDataLoaderService } from '../../data-access/dashboard-data-loader.service';
import { BudgetInfoComponent } from '../../ui/budget-info/budget-info.component';
import { ExpenseClassificationChartComponent } from '../../ui/expense-classification-chart/expense-classification-chart.component';
import { CategoryExpenditureGridComponent } from '../category-expenditure-grid/category-expenditure-grid.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-dashboard-container',
  standalone: true,
  imports: [
    NavbarComponent,
    ExpenseClassificationChartComponent,
    BudgetInfoComponent,
    CategoryExpenditureGridComponent,
    MatProgressSpinnerModule,
    NgIf,
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
  isLoading: boolean = true;
  error: any = null;

  constructor(private dashboardDataLoader: DashboardDataLoaderService) {}

  ngOnInit() {
    this.loadDashboardData(new Date());
  }

  updateDashboard(eventData: Date) {
    this.loadDashboardData(eventData);
  }

  private loadDashboardData(date: Date) {
    this.isLoading = true;
    this.error = null;

    this.dashboardDataLoader.fetchData(date).subscribe({
      next: (data) => {
        this.dashboardComponentData = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.error = error;
        this.isLoading = false;
      },
    });
  }
}
