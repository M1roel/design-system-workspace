import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'atomic-button',
  standalone: true,
  imports: [CommonModule],
  template: `<button [ngClass]="variant">{{ label }}</button>`,
  styleUrls: ['./button.component.scss'] // oder .css, je nach dem
})
export class ButtonComponent {
  @Input() label = '';
  @Input() variant: 'primary' | 'danger' | 'outline' = 'primary';
}
