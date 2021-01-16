import { HasFormatter } from '../interfaces/HasFormatter.js'

// classes
export class Payment implements HasFormatter {
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number,
        public time: string
    ){}

    format(){
        return `${this.recipient} is owed $${this.amount} for ${this.details} as at ${this.time}`
    };
}
