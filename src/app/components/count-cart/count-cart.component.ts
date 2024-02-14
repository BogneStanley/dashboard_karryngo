import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count-cart',
  standalone: true,
  imports: [],
  templateUrl: './count-cart.component.html',
  styleUrl: './count-cart.component.scss',
})
export class CountCartComponent {
  @Input() count = 0;
  @Input() text = '';
  constructor() {}

  formatNumber(value: number): string {
    if (value >= 1e9) {
      return (value / 1e9).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (value >= 1e6) {
      return (value / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (value >= 1e3) {
      return (value / 1e3).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return value.toString();
  }
}
