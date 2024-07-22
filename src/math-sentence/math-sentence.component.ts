import { Component, Input } from '@angular/core';
import { MathContainerComponent } from '../math-container/math-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'math-sentence',
  standalone: true,
  imports: [CommonModule, MathContainerComponent],
  templateUrl: './math-sentence.component.html',
  styleUrl: './math-sentence.component.less'
})
export class MathSentenceComponent {

  public isString(obj: string | object): boolean {
    return typeof (obj) == 'string';
  }

  @Input() dataArray!: any;
}
