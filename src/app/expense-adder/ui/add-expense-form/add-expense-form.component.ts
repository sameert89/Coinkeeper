import { Component } from '@angular/core';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { categories } from '../../../shared/utils/constants';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { NavbarComponent } from '../../../dashboard/feature/navbar/navbar.component';

@Component({
  selector: 'app-add-expense-form',
  standalone: true,
  imports: [NavbarComponent,MatDatepickerModule,MatButtonModule, MatSelectModule ,MatFormFieldModule, MatIconModule, MatLabel, MatInputModule],
  templateUrl: './add-expense-form.component.html',
  styleUrl: './add-expense-form.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class AddExpenseFormComponent {
  categories: any[] = categories;
  selectedValue: string = this.categories[0].name;
}
