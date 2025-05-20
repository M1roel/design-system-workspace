import { Component } from '@angular/core';
import { ButtonComponent } from 'atomic-design';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'design-demo';
}
