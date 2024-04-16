import { catchError, map, Observable } from 'rxjs';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { apiUri, categories } from '../../shared/utils/constants';
import { BudgetInfoComponentDataModel } from './budget-info-component-data.model';
import { DashboardComponentDataModel } from './dashboard-component-data.model';
import { ExpenseClassificationChartDataModel } from './expense-classification-chart-data.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardDataLoaderService {
  constructor(private http: HttpClient) {}
  private cleanData(data: any): DashboardComponentDataModel {
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

    const categorywiseExpenditureValues = Array.from(categories.keys()).map(
      (category) => categoryTotals[category]
    );

    return new DashboardComponentDataModel(
      new BudgetInfoComponentDataModel(
        totalSpent,
        data.budget,
        categoryWithMaximumExpense.category
      ),
      chartData,
      categorywiseExpenditureValues
    );
  }
  fetchData(date: Date): Observable<DashboardComponentDataModel> {
    return this.http
      .get(apiUri + 'categorywise-expenditure', {
        withCredentials: true,
        params: new HttpParams()
          .set('month', date.getMonth() + 1)
          .set('year', date.getFullYear()),
      })
      .pipe(
        map((response) => this.cleanData(response)),
        catchError((error) => {
          throw error;
        })
      );
  }
}
