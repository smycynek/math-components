export const MixedNumDataName = "MixedNumData";
export const AddOpDataName = "AddOpData";
export const SubOpDataName  = "SubOpData";
export const DivOpDataName = "DivOpDataName";
export const MultOpDataName = "MultOpDataName";
export const ExpOpDataName = "ExpOpDataName";
export const RootOpDataName = "RootOpDataName";

// It would be nice if we could use the type name
// property directly, but it gets mangled by the optimizer.
// There may be another, better way.

export class ExpressionData {
    constructor(public value: number, public opType: string) {
    }
}


export class MixedNumData extends ExpressionData {
    public constructor(
    
        public whole: number,
        public numerator: number,
        public denominator: number,
        public showRval = false,
        public displayOp = "",
        public displayRval  = NaN,) {
        let fraction = 0;
            if (!isNaN(numerator/denominator)) {
                fraction = Math.abs(numerator/denominator);
            }
        super( (Math.abs(whole) + fraction) *  ((whole < 0) ? -1 : 1), 
        MixedNumDataName );
    }
}


export class AddOpData extends ExpressionData {
    public constructor(
        public left: number,
        public right: number,
        public showRval =false,
        public displayOp  = "",
        public displayRval = NaN,) {
        super(left + right, AddOpDataName);
    }
}

export class SubOpData extends ExpressionData {
    public constructor(
    
        public left: number,
        public right: number,
        public showRval = false,
        public displayOp = "",
        public displayRval  = NaN,
    ) {
            super(left - right, SubOpDataName);
    }
}

export class MultOpData extends ExpressionData {
    public constructor(
    
        public left: number,
        public right: number,
        public showRval = false,
        public displayOp = "",
        public displayRval = NaN,) {
            super(left * right, MultOpDataName);
    }
}

export class DivOpData extends ExpressionData {
    public constructor(
    
        public left: number,
        public right: number,
        public showRval = false,
        public displayOp = "",
        public displayRval = NaN,) {
            super(left / right, DivOpDataName);
    }
}


export class ExpOpData extends ExpressionData {
    public constructor(
    
        public base: number,
        public power: number,
        public showRval = false,
        public displayOp = "",
        public displayRval = NaN,) {
            super(Math.pow(base, power) , ExpOpDataName);
    }
}



export class RootData extends ExpressionData {
    public constructor(
    
        public coefficient: number,
        public index: number,
        public radicand: number,
        public showRval = false,
        public displayOp = "",
        public displayRval = NaN,
      ) {
        super( coefficient * (Math.pow(radicand, 1/index)), RootOpDataName);
    }
}