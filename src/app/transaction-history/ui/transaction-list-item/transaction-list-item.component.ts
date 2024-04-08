import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-transaction-list-item',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './transaction-list-item.component.html',
  styleUrl: './transaction-list-item.component.scss',
})
export class TransactionListItemComponent {
  @Input() category: any;
  @Input() amount: number = 0;
}
