import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-category-tablet',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './category-tablet.component.html',
  styleUrl: './category-tablet.component.scss',
})
export class CategoryTabletComponent {
  @Input() iconName: string = 'home';
  @Input() catName: string = 'food';
  @Input() expenditureVal: number = 0.0;
}
