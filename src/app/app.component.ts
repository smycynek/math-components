import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { CommonModule } from '@angular/common';
import { AdditionExpressionData, DivisionExpressionData, ExponentExpressionData, ExpressionData, LogarithmExpressionData, MixedNumberExpressionData, MultiplicationExpressionData, RootExpressionData, SubtractionExpressionData, s } from '../math-components/expression-data/expressionData';
import { OP_NE, OP_LT, OP_GT } from '../math-components/expression-data/operators';
import { MathExpressionComponent } from '../math-components/math-expression/math-expression.component';
import { MathSentenceComponent } from '../math-components/math-sentence/math-sentence.component';
import { MixedNumberExpressionComponent } from '../math-components/expression-components/mixed-number-expression/mixed-number-expression.component';
import { RootExpressionComponent } from '../math-components/expression-components/root-expression/root-expression.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MathSentenceComponent, MathExpressionComponent, RouterOutlet, MathExpressionComponent, MixedNumberExpressionComponent, RootExpressionComponent],
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
    return new MixedNumberExpressionData(whole, numerator, denominator, showRval, displayOp, displayRval);
  }

  public newRoot(
    coefficient: number,
    index: number,
    radicand: number,
    showRval = false,
    displayOp = "",
    displayRval = NaN,) {
    return new RootExpressionData(coefficient, index, radicand, showRval, displayOp, displayRval);
  }

  public newExponent(
    base: number,
    power: number,
    showRval = false,
    displayOp = "",
    displayRval = NaN,) {
    return new ExponentExpressionData(base, power, showRval, displayOp, displayRval);
  }

  public newAddition(
    left: number,
    right: number,
    showRval = false,
    displayOp = "",
    displayRval = NaN,) {
    return new AdditionExpressionData(right, left, showRval, displayOp, displayRval);
  }

  public NewSubtraction(
    left: number,
    right: number,
    showRval = false,
    displayOp = "",
    displayRval = NaN,) {
    return new SubtractionExpressionData(right, left, showRval, displayOp, displayRval);
  }

  public NewMultiplication(
    left: number,
    right: number,
    showRval = false,
    displayOp = "",
    displayRval = NaN) {
    return new MultiplicationExpressionData(right, left, showRval, displayOp, displayRval);
  }

  public NewDivision(
    left: number,
    right: number,
    showRval = false,
    displayOp = "",
    displayRval = NaN,) {
    return new DivisionExpressionData(right, left, showRval, displayOp, displayRval);
  }

  public getRootData() {
    return [
      new RootExpressionData(2, 2, 4),
      new RootExpressionData(2, 3, 8),
      new RootExpressionData(2, 3, 8, true),
      new RootExpressionData(2, 3, 8, true, OP_NE, 7),
      new RootExpressionData(2, 3, 8, true, "", 7),
      new RootExpressionData(2, 3, 8, true, OP_NE),
    ];
  }

  public getMixedNumData() {
    return [
      new MixedNumberExpressionData(0, 4, 5),
      new MixedNumberExpressionData(12, 0, 1),
      new MixedNumberExpressionData(12, 0, 1, true),
      new MixedNumberExpressionData(12, 2, 4),
      new MixedNumberExpressionData(12, 2, 4, true),
      new MixedNumberExpressionData(12, 2, 4, true, OP_NE, 2),
      new MixedNumberExpressionData(12, 2, 4, true, "", 99),
      new MixedNumberExpressionData(12, 2, 4, true, OP_NE),
    ];
  }

  public getMultData() {
    return [
      new MultiplicationExpressionData(12, 2),
      new MultiplicationExpressionData(12, 2, true),
      new MultiplicationExpressionData(12, 2, true, OP_NE, 2),
      new MultiplicationExpressionData(12, 2, true, "", 99),
      new MultiplicationExpressionData(12, 2, true, OP_NE),
    ];
  }

  public getDivData() {
    return [
      new DivisionExpressionData(12, 2),
      new DivisionExpressionData(12, 2, true),
      new DivisionExpressionData(12, 2, true, OP_NE, 2),
      new DivisionExpressionData(12, 2, true, "", 99),
      new DivisionExpressionData(12, 2, true, OP_NE),
    ];
  }

  public getAddData() {
    return [
      new AdditionExpressionData(12, 2),
      new AdditionExpressionData(12, 2, true),
      new AdditionExpressionData(12, 2, true, OP_NE, 2),
      new AdditionExpressionData(12, 2, true, "", 99),
      new AdditionExpressionData(12, 2, true, OP_NE),
    ];
  }

  public getSubData() {
    return [
      new SubtractionExpressionData(12, 2),
      new SubtractionExpressionData(12, 2, true),
      new SubtractionExpressionData(12, 2, true, OP_NE, 2),
      new SubtractionExpressionData(12, 2, true, "", 99),
      new SubtractionExpressionData(12, 2, true, OP_NE),
    ];
  }

  public getExpData() {
    return [
      new ExponentExpressionData(4, 3),
      new ExponentExpressionData(4, 3, true),
      new ExponentExpressionData(4, 3, true, OP_NE, 2),
      new ExponentExpressionData(4, 3, true, "", 99),
      new ExponentExpressionData(4, 3, true, OP_NE),
    ];
  }

  public getLogData() {
    return [
      new LogarithmExpressionData(2, 2, 64, true),
      new LogarithmExpressionData(1, 10, 1000),
      new LogarithmExpressionData(1, 10, 1000, true),
      new LogarithmExpressionData(1, 10, 1000, true, OP_NE, 100),
    ];
  }

 
  public indices() {return [0,1,2,3]};

  public getVariousDataRow(): ExpressionData[] {
    return [new MixedNumberExpressionData(1, 4, 5),
    new MixedNumberExpressionData(0, 1, 2),
    new MixedNumberExpressionData(-1, 5, 9),
    new ExponentExpressionData(5,2),
    new ExponentExpressionData(10,2),
    new ExponentExpressionData(2,3),
    new LogarithmExpressionData(5,2,64),
    new LogarithmExpressionData(1,10,1000),
    new LogarithmExpressionData(1,2,64),
    new DivisionExpressionData(10,2),
    new SubtractionExpressionData(10,2),
    new AdditionExpressionData(10,2),
    new MultiplicationExpressionData(10,2),
    new RootExpressionData(2,3,8),
    new RootExpressionData(2,2,16),
    new RootExpressionData(1,2,25)];
  }

  public getSampleRoot() {
    return new RootExpressionData(4, 3, 8);
  }

  public getSampleRootWithValue() {
    return new RootExpressionData(4, 3, 8, true);
  }

  public getSampleRootWithOverriddenValue() {
    return new RootExpressionData(4, 3, 8, true, OP_NE, 99);
  }

  compoundSentence1 = [s('Is this value,'),
  new RootExpressionData(4, 3, 8),
  s(', equivalent to'),
  new MixedNumberExpressionData(0, 1, 5),
  s('?')];

  compoundSentence2 = [
    s('What about'),
    new ExponentExpressionData(2, 10),
    s("?"),
    s("Is it >"),
    new RootExpressionData(1, 3, 1000),
    s("?")];

  compoundSentence3 = [
    s(`Find all values ${OP_LT}`),
    new MixedNumberExpressionData(10, 0, 0),
    s(`or ${OP_GT}`),
    new MixedNumberExpressionData(20, 0, 0)];

  compoundSentence4 = [
    s('Is this value,'),
    new RootExpressionData(4, 3, 8),
    s(', equivalent to'),
    new MixedNumberExpressionData(0, 1, 5),
    s('?')];

  compoundSentence5 = [s("Find all numbers between"),
  new MixedNumberExpressionData(5, 0, 0),
  s("and"),
  new MixedNumberExpressionData(10, 0, 0),
  s(".")];

  compoundSentence6 = [s("Incorrect."),
  new DivisionExpressionData(10, 3, true),
  s(", not a whole number.")];

  compoundSentence7 = [
    s("Find all prime numbers")];

  compoundSentence8 = [
    s('Correct.'),
    this.newMixedNumber(2, 0, 0),
    s("times itself ("),
    this.newMixedNumber(2, 0, 0),
    s(") equals"),
    this.newMixedNumber(4, 0, 0)
  ];

  compoundSentence9 = [
    s("There are no whole numbers when multiplied by themselves that are equal to"),
    this.newMixedNumber(5, 0, 0)];

  compoundSentence10 = [
    this.newMixedNumber(12, 0, 0),
    s("has factors such as"),
    this.newMixedNumber(2, 0, 0),
    s(", "),
    this.newMixedNumber(3, 0, 0),
    s(", and"),
    this.newMixedNumber(4, 0, 0)];

  compoundSentence11 = [s('Incorrect'),
  this.NewMultiplication(3, 4, true),
  s(", not"),
  this.newMixedNumber(15, 0, 0)];


}
