export class TransactionDataModel {
  description: string;
  category: string;
  amount: number;
  date: Date;
  constructor(
    description: string,
    category: string,
    amount: number,
    date: Date
  ) {
    this.description = description;
    this.category = category;
    this.amount = amount;
    this.date = date;
  }
}
