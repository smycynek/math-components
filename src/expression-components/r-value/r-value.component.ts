import { Component, Input } from '@angular/core';

@Component({
  selector: 'r-value',
  standalone: true,
  imports: [],
  templateUrl: './r-value.component.html',
  styleUrl: './r-value.component.less'
})
export class RValueComponent {

  @Input()  showRval!: boolean
  @Input()  displayOp!: string;
  @Input()  displayRval!: number;
  @Input()  value!: number;
}
