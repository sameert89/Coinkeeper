import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUri } from '../../shared/utils/constants';
import { Observable, catchError, map } from 'rxjs';
import { DashboardComponentDataModel } from './dashboard-component-data.model';

import { categories } from '../../shared/utils/constants';
import { BudgetInfoComponentDataModel } from './budget-info-component-data.model';
import { ExpenseClassificationChartDataModel } from './expense-classification-chart-data.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardDataLoaderService {
  options = {
    withCredentials: true,
    params: new HttpParams()
      .set('month', new Date().getMonth() + 1)
      .set('year', new Date().getFullYear()),
  };
  constructor(private http: HttpClient) {}
  private cleanData(data: any): DashboardComponentDataModel {
    console.log(data);
    const initialAcc = Array.from(categories.keys()).reduce(
      (acc: any, category) => {
        acc[category] = 0;
        return acc;
      },
      {}
    );

    const { categoryTotals, totalSpent } = data.reduce(
      (acc: any, transaction: any) => {
        acc.categoryTotals[transaction.category] =
          (acc.categoryTotals[transaction.category] || 0) + transaction.amount;
        acc.totalSpent += transaction.amount;
        return acc;
      },
      { categoryTotals: initialAcc, totalSpent: 0 }
    );

    const categoryWithMaximumExpense = Object.entries(categoryTotals).reduce(
      (maxCat: any, [category, total]: any) =>
        total > maxCat.total ? { category, total } : maxCat,
      { category: '', total: 0 }
    );

    const chartData = Object.entries(categoryTotals).map(
      ([name, value]: any) =>
        new ExpenseClassificationChartDataModel(name, value)
    );

    // Assuming categories is a Map or similar, ensuring order for categorywiseExpenditureValues
    const categorywiseExpenditureValues = Array.from(categories.keys()).map(
      (category) => categoryTotals[category]
    );

    return new DashboardComponentDataModel(
      new BudgetInfoComponentDataModel(
        totalSpent,
        0,
        categoryWithMaximumExpense.category
      ),
      chartData,
      categorywiseExpenditureValues
    );
  }
  fetchData(): Observable<DashboardComponentDataModel> {
    return this.http
      .get(apiUri + 'categorywise-expenditure', this.options)
      .pipe(
        map((response) => this.cleanData(response)),
        catchError((error) => {
          // console.log(error);
          throw error;
        })
      );
  }
}
