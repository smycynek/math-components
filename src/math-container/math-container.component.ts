import { Component, Input } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';

import { AdditionOperationComponent } from '../expression-components/addition-operation/addition-operation.component';
import { MixedNumberComponent } from '../expression-components/mixed-number/mixed-number.component';
import { RootComponent } from '../expression-components/root/root.component';
import { SubtractionOperationComponent } from '../expression-components/subtraction-operation/subtraction-operation.component';
import { MultiplicationOperationComponent } from '../expression-components/multiplication-operation/multiplication-operation.component';
import { DivisionOperationComponent } from '../expression-components/division-operation/division-operation.component';
import { ExponentOperationComponent } from '../expression-components/exponent-operation/exponent-operation.component';
import { AddOpDataName, DivOpDataName, ExpOpDataName,  MixedNumDataName,  MultOpDataName, OperationType, RootOpDataName, StringDataName, SubOpDataName } from '../expression-data/expressionData';
import { StringValueComponent } from '../expression-components/string/string-value.component';


@Component({
  selector: 'math-exp',
  standalone: true,
  imports: [CommonModule, NgComponentOutlet],
  templateUrl: './math-container.component.html',
  styleUrl: './math-container.component.less'
})
export class MathContainerComponent {

  @Input() mathData!: OperationType;  // Could also be the base class ExpressionData;

  getMathComponent() {  // Could be a factory call or a type map, but this is probably fine.
    
    switch (this.mathData.opType) {
      case StringDataName:
        return StringValueComponent;
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
        case MixedNumDataName:
          return MixedNumberComponent;
      default:
        throw Error(`Unknown math opType {this.mathData.opType}`);
    }
  }
}