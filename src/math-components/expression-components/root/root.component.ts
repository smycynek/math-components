import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ExpressionComponent, toNumber } from '../expression/expression.component';



@Component({
  selector: 'app-mroot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './root.component.html',
  styleUrl: './root.component.less'
})
export class RootComponent extends ExpressionComponent {  
  @Input({ transform: toNumber }) coefficient!: number;
  @Input({ transform: toNumber }) index!: number;
  @Input({ transform: toNumber }) radicand!: number;
}
