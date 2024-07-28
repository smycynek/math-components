import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ExpressionComponent, toNumber } from '../expression/expression.component';



@Component({
  selector: 'app-log',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './log.component.html',
  styleUrl: './log.component.less'
})
export class LogComponent extends ExpressionComponent {  
  @Input({ transform: toNumber }) coefficient!: number;
  @Input({ transform: toNumber }) base!: number;
  @Input({ transform: toNumber }) argument!: number;
}
