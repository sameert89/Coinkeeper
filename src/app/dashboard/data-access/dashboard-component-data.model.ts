import { BudgetInfoComponentDataModel } from './budget-info-component-data.model';
import { ExpenseClassificationChartDataModel } from './expense-classification-chart-data.model';

export class DashboardComponentDataModel {
  budgetInfo!: BudgetInfoComponentDataModel;
  chartData!: ExpenseClassificationChartDataModel[];
  categorywiseExpenditureValues!: number[];

  constructor(
    budgetInfo: BudgetInfoComponentDataModel,
    chartData: ExpenseClassificationChartDataModel[],
    categorywiseExpenditureValues: number[]
  ) {
    this.budgetInfo = budgetInfo;
    this.chartData = chartData;
    this.categorywiseExpenditureValues = categorywiseExpenditureValues;
  }
}
