import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdditionOperationComponent } from '../expression-components/addition-operation/addition-operation.component';
import { MixedNumberComponent } from '../expression-components/mixed-number/mixed-number.component';
import { RootComponent } from '../expression-components/root/root.component';
import { SubtractionOperationComponent } from '../expression-components/subtraction-operation/subtraction-operation.component';
import { MultiplicationOperationComponent } from '../expression-components/multiplication-operation/multiplication-operation.component';
import { DivisionOperationComponent } from '../expression-components/division-operation/division-operation.component';
import { ExponentOperationComponent } from '../expression-components/exponent-operation/exponent-operation.component';
import { AddOpData, SubOpData, MultOpData, DivOpData, ExpOpData, RootData } from '../expression-data/expressionData';
import { RValueComponent } from '../expression-components/r-value/r-value.component';

@Component({
  selector: 'math-exp',
  standalone: true,
  imports: [CommonModule, RValueComponent],
  templateUrl: './math-container.component.html',
  styleUrl: './math-container.component.less'
})
export class MathContainerComponent {
  @Input() mathData!: any;

  getMathComponent() {  // Could be a factory call
    switch (this.mathData.opType) {
      case AddOpData.name:
        return AdditionOperationComponent;
      case SubOpData.name:
        return SubtractionOperationComponent;
      case MultOpData.name:
        return MultiplicationOperationComponent;
      case DivOpData.name:
        return DivisionOperationComponent;
      case ExpOpData.name:
        return ExponentOperationComponent;
      case RootData.name:
        return RootComponent;
      default:
        return MixedNumberComponent;
    }
  }
}