export class BudgetInfoComponentDataModel {
  totalSpent!: number;
  budget!: number;
  topCategoryName!: string;

  constructor(totalSpent: number, budget: number, topCategoryName: string) {
    (this.totalSpent = totalSpent),
      (this.budget = budget),
      (this.topCategoryName = topCategoryName);
  }
}
