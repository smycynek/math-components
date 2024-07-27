import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ExpressionComponent } from '../expression-components/expression/expression.component';
import { MixedNumberComponent } from '../expression-components/mixed-number/mixed-number.component';
import { RootComponent } from '../expression-components/root/root.component';
import { MathContainerComponent } from '../math-container/math-container.component';
import { RootData, MixedNumData, MultOpData, DivOpData, AddOpData, SubOpData, ExpOpData } from '../expression-data/expressionData';
import { OP_GT, OP_LT, OP_NE } from '../expression-data/operators';
import { MathSentenceComponent } from '../math-sentence/math-sentence.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MathSentenceComponent, MathContainerComponent, RouterOutlet, ExpressionComponent, MixedNumberComponent, RootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {

  public newMixedNumber(
    whole: number,
    numerator: number,
    denominator: number,
    showRval = false,
    displayOp = "",
    displayRval = NaN,) {
    return new MixedNumData(whole, numerator, denominator, showRval, displayOp, displayRval);
  }

  public newRoot(
    coefficient: number,
    index: number,
    radicand: number,
    showRval = false,
    displayOp = "",
    displayRval = NaN,) {
    return new RootData(coefficient, index, radicand, showRval, displayOp, displayRval);
  }

  public newExponent(
    base: number,
    power: number,
    showRval = false,
    displayOp = "",
    displayRval = NaN,) {
    return new ExpOpData(base, power, showRval, displayOp, displayRval);
  }

  public newAdd(
    left: number,
    right: number,
    showRval = false,
    displayOp = "",
    displayRval = NaN,) {
    return new AddOpData(right, left, showRval, displayOp, displayRval);
  }

  public NewSub(
    left: number,
    right: number,
    showRval = false,
    displayOp = "",
    displayRval = NaN,) {
    return new SubOpData(right, left, showRval, displayOp, displayRval);
  }

  public NewMult(
    left: number,
    right: number,
    showRval = false,
    displayOp = "",
    displayRval = NaN) {
    return new MultOpData(right, left, showRval, displayOp, displayRval);
  }

  public NewDiv(
    left: number,
    right: number,
    showRval = false,
    displayOp = "",
    displayRval = NaN,) {
    return new DivOpData(right, left, showRval, displayOp, displayRval);
  }

  public getRootData() {
    return [
      new RootData(2, 2, 4),
      new RootData(2, 3, 8),
      new RootData(2, 3, 8, true),
      new RootData(2, 3, 8, true, OP_NE, 7),
      new RootData(2, 3, 8, true, "", 7),
      new RootData(2, 3, 8, true, OP_NE),
    ];
  }

  public getMixedNumData() {
    return [
      new MixedNumData(0, 4, 5),
      new MixedNumData(12, 0, 1),
      new MixedNumData(12, 0, 1, true),
      new MixedNumData(12, 2, 4),
      new MixedNumData(12, 2, 4, true),
      new MixedNumData(12, 2, 4, true, OP_NE, 2),
      new MixedNumData(12, 2, 4, true, "", 99),
      new MixedNumData(12, 2, 4, true, OP_NE),
    ];
  }

  public getMultData() {
    return [
      new MultOpData(12, 2),
      new MultOpData(12, 2, true),
      new MultOpData(12, 2, true, OP_NE, 2),
      new MultOpData(12, 2, true, "", 99),
      new MultOpData(12, 2, true, OP_NE),
    ];
  }

  public getDivData() {
    return [
      new DivOpData(12, 2),
      new DivOpData(12, 2, true),
      new DivOpData(12, 2, true, OP_NE, 2),
      new DivOpData(12, 2, true, "", 99),
      new DivOpData(12, 2, true, OP_NE),
    ];
  }

  public getAddData() {
    return [
      new AddOpData(12, 2),
      new AddOpData(12, 2, true),
      new AddOpData(12, 2, true, OP_NE, 2),
      new AddOpData(12, 2, true, "", 99),
      new AddOpData(12, 2, true, OP_NE),
    ];
  }

  public getSubData() {
    return [
      new SubOpData(12, 2),
      new SubOpData(12, 2, true),
      new SubOpData(12, 2, true, OP_NE, 2),
      new SubOpData(12, 2, true, "", 99),
      new SubOpData(12, 2, true, OP_NE),
    ];
  }

  public getExpData() {
    return [
      new ExpOpData(4, 3),
      new ExpOpData(4, 3, true),
      new ExpOpData(4, 3, true, OP_NE, 2),
      new ExpOpData(4, 3, true, "", 99),
      new ExpOpData(4, 3, true, OP_NE),
    ];
  }

  public getMixedNumDataRow() {
    return [
      new MixedNumData(0, 4, 5),
      new MixedNumData(0, 1, 2),
      new MixedNumData(0, 5, 9),

    ];
  }

  public getSampleRoot() {
    return new RootData(4, 3, 8);
  }

  public getSampleRootWithValue() {
    return new RootData(4, 3, 8, true);
  }

  public getSampleRootWithOverriddenValue() {
    return new RootData(4, 3, 8, true, OP_NE, 99);
  }

  compoundSentence1 = ['Is this value,',
    new RootData(4, 3, 8),
    ', equivalent to', new MixedNumData(0, 1, 5),
    '?'];

  compoundSentence2 = ['What about',
    new ExpOpData(2, 10),
    "?",
    "Is it >",
    new MixedNumData(1000, 0, 0),
    "?"];

  compoundSentence3 = [`Find all values ${OP_LT}`,
  new MixedNumData(10, 0, 0),
  `or ${OP_GT}`,
  new MixedNumData(20, 0, 0)];

  compoundSentence4 = ['Is this value,',
    new RootData(4, 3, 8),
    ', equivalent to', new MixedNumData(0, 1, 5),
    '?'];

  compoundSentence5 = ["Find all numbers between",
    new MixedNumData(5, 0, 0),
    "and",
    new MixedNumData(10, 0, 0),
    "."];

  compoundSentence6 = ["Incorrect.",
    new DivOpData(10, 3, true),
    ", not a whole number."];

  compoundSentence7 = ["Find all prime numbers"];

  compoundSentence8 = ['Correct.', this.newMixedNumber(2, 0, 0), "times itself (",
    this.newMixedNumber(2, 0, 0), ") equals", this.newMixedNumber(4, 0, 0)
  ];

  compoundSentence9 = ["There are no whole numbers when multiplied by themselves that are equal to", this.newMixedNumber(5, 0, 0)];

  compoundSentence10 = [this.newMixedNumber(12, 0, 0), "has factors such as", this.newMixedNumber(2, 0, 0), ", ", this.newMixedNumber(3, 0, 0), ", and", this.newMixedNumber(4, 0, 0)];

  compoundSentence11 = ['Incorrect', this.NewMult(3, 4, true), ", not", this.newMixedNumber(15, 0, 0)]

}
