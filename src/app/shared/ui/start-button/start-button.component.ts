import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-start-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, NgClass],
  templateUrl: './start-button.component.html',
  styleUrl: './start-button.component.scss',
})
export class StartButtonComponent {
  @Input() buttonTitle: string = '';
  @Input() disabled: boolean = false;
  @Output() clicked = new EventEmitter<void>();
  handleClick(): void {
    this.clicked.emit();
  }
}
