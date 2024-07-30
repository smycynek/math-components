import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ExpressionComponent, toNumber } from '../expression/expression.component';

@Component({
  selector: 'app-add-operation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './addition-operation.component.html',
  styleUrl: './addition-operation.component.less'
})
export class AdditionOperationComponent extends ExpressionComponent {
  @Input({ transform: toNumber }) left!: number;
  @Input({ transform: toNumber }) right!: number;
}
