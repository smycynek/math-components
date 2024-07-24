

export class ExpressionData {
    constructor(public value: number, public opType: string) {
    }
    public dataAsObject() {
        return {...this};
    }
}


export class MixedNumData extends ExpressionData {
    public constructor(
        //
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
        MixedNumData.name );
    }
}


export class AddOpData extends ExpressionData {
    public constructor(
        public left: number,
        public right: number,
        public showRval =false,
        public displayOp  = "",
        public displayRval = NaN,) {
        super(left + right, AddOpData.name);
    }
}

export class SubOpData extends ExpressionData {
    public constructor(
        //
        public left: number,
        public right: number,
        public showRval = false,
        public displayOp = "",
        public displayRval  = NaN,
    ) {
            super(left - right, SubOpData.name);
    }
}

export class MultOpData extends ExpressionData {
    public constructor(
        //
        public left: number,
        public right: number,
        public showRval = false,
        public displayOp = "",
        public displayRval = NaN,) {
            super(left * right, MultOpData.name);
    }
}

export class DivOpData extends ExpressionData {
    public constructor(
        //
        public left: number,
        public right: number,
        public showRval = false,
        public displayOp = "",
        public displayRval = NaN,) {
            super(left / right, DivOpData.name);
    }
}


export class ExpOpData extends ExpressionData {
    public constructor(
        //
        public base: number,
        public power: number,
        public showRval = false,
        public displayOp = "",
        public displayRval = NaN,) {
            super(Math.pow(base, power) , ExpOpData.name);
    }
}



export class RootData extends ExpressionData {
    public constructor(
        //
        public coefficient: number,
        public index: number,
        public radicand: number,
        public showRval = false,
        public displayOp = "",
        public displayRval = NaN,
      ) {
        super( coefficient * (Math.pow(radicand, 1/index)), RootData.name);
    }
}