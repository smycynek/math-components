import { Component, Input } from '@angular/core';
import { ExpressionComponent } from '../expression/expression.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-string-value',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './string-value.component.html',
  styleUrl: './string-value.component.less'
})
export class StringValueComponent extends ExpressionComponent {
  @Input() stringValue!: string;

  public isPunctuationPhrase() {
    return (this.stringValue.startsWith('.') || this.stringValue.startsWith(',') || this.stringValue.startsWith('?'));
  }
}
