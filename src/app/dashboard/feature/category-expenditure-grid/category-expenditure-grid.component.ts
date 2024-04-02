import { Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { categories } from '../../../shared/utils/constants';
import { MatIconModule } from '@angular/material/icon';
import { CategoryTabletComponent } from '../../ui/category-tablet/category-tablet.component';

@Component({
  selector: 'app-category-expenditure-grid',
  standalone: true,
  imports: [MatGridListModule, MatIconModule, CategoryTabletComponent],
  templateUrl: './category-expenditure-grid.component.html',
  styleUrl: './category-expenditure-grid.component.scss',
})
export class CategoryExpenditureGridComponent {
  categories: Map<string, string> = categories;
  breakpoint: number = 0;
  @Input() values: number[] = new Array(categories.size).fill(0);
  ngOnInit() {
    this.breakpoint = window.innerWidth <= 1024 ? 3 : 7;
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 1024 ? 3 : 7;
  }
}
