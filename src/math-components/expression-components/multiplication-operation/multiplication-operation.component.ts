import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ExpressionComponent, toNumber } from '../expression/expression.component';

@Component({
  selector: 'app-mult-operation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multiplication-operation.component.html',
  styleUrl: './multiplication-operation.component.less'
})
export class MultiplicationOperationComponent extends ExpressionComponent {
  @Input({ transform: toNumber }) left!: number;
  @Input({ transform: toNumber }) right!: number;
}
