import { HasFormatter } from '../interfaces/HasFormatter.js'

// classes
export class Invoice implements HasFormatter {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
        public time: string
    ){}

    format(){
        return `${this.client} owes $${this.amount} for ${this.details} as at ${this.time}`
    };
}
