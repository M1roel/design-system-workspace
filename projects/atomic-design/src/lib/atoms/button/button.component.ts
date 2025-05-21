import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'atomic-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'], // oder .css, je nach dem
})
export class ButtonComponent {
  @Input() label = '';
  @Input() variant: 'primary' | 'danger' | 'outline' = 'primary';
}
