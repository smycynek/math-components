import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ExpressionComponent } from '../expression-components/expression/expression.component';
import { MixedNumberComponent } from '../expression-components/mixed-number/mixed-number.component';
import { RootComponent } from '../expression-components/root/root.component';
import { MathContainerComponent } from '../math-container/math-container.component';
import { RootData, MixedNumData, MultOpData, DivOpData, AddOpData, SubOpData, ExpOpData } from '../expression-data/expressionData';
import { OP_NE } from '../expression-data/operators';
import { RValueComponent } from '../expression-components/r-value/r-value.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MathContainerComponent, CommonModule, RouterOutlet, ExpressionComponent, MixedNumberComponent, RootComponent, RValueComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {

public newMixedNumber( 
    prefixOp: string | null,
    whole: number,
    numerator: number,
    denominator: number,
    showRval = false,
    displayOp = "",
    displayRval  = NaN,) {
       return new MixedNumData(prefixOp, whole, numerator, denominator, showRval, displayOp, displayRval).dataAsObject();
}

public newRoot(
  prefixOp: string | null,  
  coefficient: number,
  index: number,
  radicand: number,
  showRval = false,
  displayOp = "",
  displayRval  = NaN,) {
     return new RootData(prefixOp, coefficient, index, radicand, showRval, displayOp, displayRval).dataAsObject();
}

public newExponent(
  prefixOp: string | null,
  base: number,
  power: number,
  showRval = false,
  displayOp = "",
  displayRval  = NaN,) {
     return new ExpOpData(prefixOp, base, power , showRval, displayOp, displayRval).dataAsObject();
}

public newAdd(
  prefixOp: string | null,  
  left: number,
  right: number,
  showRval = false,
  displayOp = "",
  displayRval  = NaN,) {
     return new AddOpData(prefixOp, right, left, showRval, displayOp, displayRval).dataAsObject();
}

public NewSub(
  prefixOp: string | null,
  left: number,
  right: number,
  showRval = false,
  displayOp = "",
  displayRval  = NaN,) {
     return new SubOpData(prefixOp, right, left, showRval, displayOp, displayRval).dataAsObject();
}

public NewMult(
  prefixOp: string | null,
  left: number,
  right: number,
  showRval = false,
  displayOp = "",
  displayRval  = NaN) {
     return new MultOpData(prefixOp, right, left, showRval, displayOp, displayRval).dataAsObject();
}

public NewDiv(
  prefixOp: string | null,
  left: number,
  right: number,
  showRval = false,
  displayOp = "",
  displayRval  = NaN,) {
     return new DivOpData(prefixOp, right, left, showRval, displayOp, displayRval).dataAsObject();
}

  public getRootData() {
    return [
     new RootData(null, 2, 2, 4).dataAsObject(),
     new RootData(null, 2, 3, 8).dataAsObject(),
     new RootData(null, 2, 3, 8, true).dataAsObject(),
     new RootData(null, 2, 3, 8, true, OP_NE, 7).dataAsObject(),
     new RootData(null, 2, 3, 8, true, "", 7).dataAsObject(),
     new RootData(null, 2, 3, 8, true, OP_NE).dataAsObject(),
    ];
}

public getMixedNumData() {
  return [
    new MixedNumData(null, 0,4,5).dataAsObject(),
    new MixedNumData(null, 12, 0,1).dataAsObject(),
    new MixedNumData(null, 12, 0,1, true).dataAsObject(),
    new MixedNumData(null, 12, 2,4).dataAsObject(),
    new MixedNumData(null, 12, 2,4, true).dataAsObject(),
    new MixedNumData(null, 12, 2,4, true, OP_NE, 2).dataAsObject(),
    new MixedNumData(null, 12, 2,4, true, "", 99).dataAsObject(),
    new MixedNumData(null, 12, 2,4, true, OP_NE).dataAsObject(),
  ];
}


public getMixedNumDataRow() {
  return [
    new MixedNumData(null, 0, 4, 5).dataAsObject(),
    new MixedNumData(null, 0, 1, 2).dataAsObject(),
    new MixedNumData(null, 0, 5, 9).dataAsObject(),

  ];
}

public getMultData() {
  return [
    new MultOpData(null, 12, 2).dataAsObject(),
    new MultOpData(null, 12, 2, true).dataAsObject(),
    new MultOpData(null, 12, 2, true, OP_NE, 2).dataAsObject(),
    new MultOpData(null, 12, 2, true, "", 99).dataAsObject(),
    new MultOpData(null, 12, 2, true, OP_NE).dataAsObject(),
  ];
}

public getDivData() {
  return [
    new DivOpData(null, 12, 2).dataAsObject(),
    new DivOpData(null, 12, 2, true).dataAsObject(),
    new DivOpData(null, 12, 2, true, OP_NE, 2).dataAsObject(),
    new DivOpData(null, 12, 2, true, "", 99).dataAsObject(),
    new DivOpData(null, 12, 2, true, OP_NE).dataAsObject(),
  ];
}


public getAddData() {
  return [
    new AddOpData(null, 12, 2).dataAsObject(),
    new AddOpData(null, 12, 2, true).dataAsObject(),
    new AddOpData(null, 12, 2, true, OP_NE, 2).dataAsObject(),
    new AddOpData(null, 12, 2, true, "", 99).dataAsObject(),
    new AddOpData(null, 12, 2, true, OP_NE).dataAsObject(),
  ];
}

public getSubData() {
  return [
    new SubOpData(null, 12, 2).dataAsObject(),
    new SubOpData(null, 12, 2, true).dataAsObject(),
    new SubOpData(null, 12, 2, true, OP_NE, 2).dataAsObject(),
    new SubOpData(null, 12, 2, true, "", 99).dataAsObject(),
    new SubOpData(null, 12, 2, true, OP_NE).dataAsObject(),
  ];
}

public getExpData() {
  return [
    new ExpOpData(null, 4, 3).dataAsObject(),
    new ExpOpData(null, 4, 3, true).dataAsObject(),
    new ExpOpData(null, 4, 3, true, OP_NE, 2).dataAsObject(),
    new ExpOpData(null, 4, 3, true, "", 99).dataAsObject(),
    new ExpOpData(null, 4, 3, true, OP_NE).dataAsObject(),
  ];
}

preamble="Sorry, ";
postamble=".  Try again."

public getSampleRoot() {
  return new RootData(null, 4, 3, 8).dataAsObject();
}

public getSampleRootWithValue() {
  return new RootData(null, 4, 3, 8, true).dataAsObject();
}
public getSampleRootWithOverriddenValue() {
  return new RootData(null, 4, 3, 8, true, OP_NE, 99).dataAsObject();
}


}
