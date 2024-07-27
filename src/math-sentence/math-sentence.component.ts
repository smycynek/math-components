import { Component, Input } from '@angular/core';
import { MathContainerComponent } from '../math-container/math-container.component';
import { CommonModule } from '@angular/common';
import { AddOpData, SubOpData, MultOpData, DivOpData, ExpOpData, RootData, MixedNumData, StringExpressionData } from '../expression-data/expressionData';

@Component({
  selector: 'math-sentence',
  standalone: true,
  imports: [CommonModule, MathContainerComponent],
  templateUrl: './math-sentence.component.html',
  styleUrl: './math-sentence.component.less'
})
export class MathSentenceComponent {

  public isPunctuationPhrase(value: string) {
    return (value.startsWith('.') || value.startsWith(',') || value.startsWith('?'));
  }

  @Input() dataArray!: (AddOpData | SubOpData | MultOpData | DivOpData | ExpOpData | RootData | MixedNumData | StringExpressionData)[];
  }
