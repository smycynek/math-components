import { Component, Input } from '@angular/core';
import { ExpressionComponent, toNumber } from '../expression/expression.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-mixed-number',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mixed-number.component.html',
  styleUrl: './mixed-number.component.less'
})
export class MixedNumberComponent extends ExpressionComponent {
  @Input({ transform: toNumber }) whole!: number;
  @Input({ transform: toNumber }) numerator!: number;
  @Input({ transform: toNumber }) denominator!: number;
}
