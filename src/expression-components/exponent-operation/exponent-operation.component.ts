import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ExpressionComponent, toNumber } from '../expression/expression.component';

@Component({
  selector: 'app-exponent-operation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exponent-operation.component.html',
  styleUrl: './exponent-operation.component.less'
})
export class ExponentOperationComponent extends ExpressionComponent {

  @Input({ transform: toNumber }) base!: number;
  @Input({ transform: toNumber }) power!: number;
}
