import { Component, Input } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';

import { AdditionOperationComponent } from '../expression-components/addition-operation/addition-operation.component';
import { MixedNumberComponent } from '../expression-components/mixed-number/mixed-number.component';
import { RootComponent } from '../expression-components/root/root.component';
import { SubtractionOperationComponent } from '../expression-components/subtraction-operation/subtraction-operation.component';
import { MultiplicationOperationComponent } from '../expression-components/multiplication-operation/multiplication-operation.component';
import { DivisionOperationComponent } from '../expression-components/division-operation/division-operation.component';
import { ExponentOperationComponent } from '../expression-components/exponent-operation/exponent-operation.component';
import { AddOpData, SubOpData, MultOpData, DivOpData, ExpOpData, RootData, AddOpDataName, DivOpDataName, ExpOpDataName, MultOpDataName, RootOpDataName, SubOpDataName } from '../expression-data/expressionData';
import { RValueComponent } from '../expression-components/r-value/r-value.component';

@Component({
  selector: 'math-exp',
  standalone: true,
  imports: [RValueComponent, NgComponentOutlet],
  templateUrl: './math-container.component.html',
  styleUrl: './math-container.component.less'
})
export class MathContainerComponent {
  @Input() mathData!: any;

  getMathComponent() {  // Could be a factory call
    
    switch (this.mathData.opType) {
      case AddOpDataName:
        return AdditionOperationComponent;
      case SubOpDataName:
        return SubtractionOperationComponent;
      case MultOpDataName:
        return MultiplicationOperationComponent;
      case DivOpDataName:
        return DivisionOperationComponent;
      case ExpOpDataName:
        return ExponentOperationComponent;
      case RootOpDataName:
        return RootComponent;
      default:
        return MixedNumberComponent;
    }
  }
}