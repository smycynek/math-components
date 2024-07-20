import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ExpressionComponent } from '../expression-components/expression/expression.component';
import { MixedNumberComponent } from '../expression-components/mixed-number/mixed-number.component';
import { RootComponent } from '../expression-components/root/root.component';
import { MathContainerComponent } from '../math-container/math-container.component';
import { RootData, MixedNumData, MultOpData, DivOpData, AddOpData, SubOpData, ExpOpData } from '../expression-data/expressionData';
import { OP_NE } from '../expression-data/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MathContainerComponent, CommonModule, RouterOutlet, ExpressionComponent, MixedNumberComponent, RootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {

  public getRootData() {
    return [
     new RootData(2, 2, 4).dataAsObject(),
     new RootData(2, 3, 8).dataAsObject(),
     new RootData(2, 3, 8, true).dataAsObject(),
     new RootData(2, 3, 8, true, OP_NE, 7).dataAsObject(),
     new RootData(2, 3, 8, true, "", 7).dataAsObject(),
     new RootData(2, 3, 8, true, OP_NE).dataAsObject(),
    ];
}

public getMixedNumData() {
  return [
    new MixedNumData(0,4,5).dataAsObject(),
    new MixedNumData(12, 0,1).dataAsObject(),
    new MixedNumData(12, 0,1, true).dataAsObject(),
    new MixedNumData(12, 2,4).dataAsObject(),
    new MixedNumData(12, 2,4, true).dataAsObject(),
    new MixedNumData(12, 2,4, true, OP_NE, 2).dataAsObject(),
    new MixedNumData(12, 2,4, true, "", 99).dataAsObject(),
    new MixedNumData(12, 2,4, true, OP_NE).dataAsObject(),
  ];
}


public getMixedNumDataRow() {
  return [
    new MixedNumData(0,4,5).dataAsObject(),
    new MixedNumData(0, 1,2).dataAsObject(),
    new MixedNumData(0, 5,9).dataAsObject(),

  ];
}

public getMultData() {
  return [
    new MultOpData(12, 2).dataAsObject(),
    new MultOpData(12, 2, true).dataAsObject(),
    new MultOpData(12, 2, true, OP_NE, 2).dataAsObject(),
    new MultOpData(12, 2, true, "", 99).dataAsObject(),
    new MultOpData(12, 2, true, OP_NE).dataAsObject(),
  ];
}

public getDivData() {
  return [
    new DivOpData(12, 2).dataAsObject(),
    new DivOpData(12, 2, true).dataAsObject(),
    new DivOpData(12, 2, true, OP_NE, 2).dataAsObject(),
    new DivOpData(12, 2, true, "", 99).dataAsObject(),
    new DivOpData(12, 2, true, OP_NE).dataAsObject(),
  ];
}


public getAddData() {
  return [
    new AddOpData(12, 2).dataAsObject(),
    new AddOpData(12, 2, true).dataAsObject(),
    new AddOpData(12, 2, true, OP_NE, 2).dataAsObject(),
    new AddOpData(12, 2, true, "", 99).dataAsObject(),
    new AddOpData(12, 2, true, OP_NE).dataAsObject(),
  ];
}

public getSubData() {
  return [
    new SubOpData(12, 2).dataAsObject(),
    new SubOpData(12, 2, true).dataAsObject(),
    new SubOpData(12, 2, true, OP_NE, 2).dataAsObject(),
    new SubOpData(12, 2, true, "", 99).dataAsObject(),
    new SubOpData(12, 2, true, OP_NE).dataAsObject(),
  ];
}

public getExpData() {
  return [
    new ExpOpData(4, 3).dataAsObject(),
    new ExpOpData(4, 3, true).dataAsObject(),
    new ExpOpData(4, 3, true, OP_NE, 2).dataAsObject(),
    new ExpOpData(4, 3, true, "", 99).dataAsObject(),
    new ExpOpData(4, 3, true, OP_NE).dataAsObject(),
  ];
}

preamble="Sorry, ";
postamble=".  Try again."

public getSampleRoot() {
  return new RootData(4, 3, 8).dataAsObject();
}

public getSampleRootWithValue() {
  return new RootData(4, 3, 8, true).dataAsObject();
}
public getSampleRootWithOverriddenValue() {
  return new RootData(4, 3, 8, true, OP_NE, 99).dataAsObject();
}


}
