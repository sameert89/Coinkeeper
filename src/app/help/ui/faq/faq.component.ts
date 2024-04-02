import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { NavbarComponent } from '../../../dashboard/feature/navbar/navbar.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [MatExpansionModule, NavbarComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {}
