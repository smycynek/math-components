import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ExpressionComponent, toNumber } from '../expression/expression.component';

@Component({
  selector: 'app-subtraction-operation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subtraction-operation.component.html',
  styleUrl: './subtraction-operation.component.less'
})
export class SubtractionOperationComponent extends ExpressionComponent {

  @Input({ transform: toNumber }) left!: number;
  @Input({ transform: toNumber }) right!: number;
}
