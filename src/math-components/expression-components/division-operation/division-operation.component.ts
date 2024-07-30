import { CommonModule } from '@angular/common';
import {  Component, Input,  } from '@angular/core';
import { ExpressionComponent, toNumber } from '../expression/expression.component';

@Component({
  selector: 'app-division-operation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './division-operation.component.html',
  styleUrl: './division-operation.component.less'
})
export class DivisionOperationComponent extends ExpressionComponent {
  @Input({ transform: toNumber }) left!: number;
  @Input({ transform: toNumber }) right!: number;
}
