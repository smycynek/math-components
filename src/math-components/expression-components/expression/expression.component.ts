import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expression',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expression.component.html',
  styleUrl: './expression.component.less'
})
export class ExpressionComponent {

  @Input({transform: toNumber}) value!: number;
  @Input() opType!: string;

  @Input()  showRval!: boolean
  @Input()  displayOp!: string;
  @Input()  displayRval!: number;
}

export function toNumber(value: string ): number {
  return Number(value);
};


export function toExpression(value: string ): number {
  return Number(value);
};

